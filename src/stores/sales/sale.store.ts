import { StateCreator, create } from 'zustand';
import { ICartProduct } from '../../interface';
import { inventoryDb } from '../../api';
import { toast } from 'sonner';
import { isAxiosError } from 'axios';

interface SaleState {

}


interface Actions {
    createNewSale: (userId: number, client: string, cart: ICartProduct[], total: number, token: string) => Promise<void>
}

const storeApi: StateCreator<SaleState & Actions> = (set, get) => ({
    createNewSale: async (userId: number, client: string, cart:ICartProduct[], total: number, token: string) => {

        const products = cart.map(item => {
            return {
                product_id: item.id,
                product_name : item.name,
                product_slug : item.slug,
                product_price : item.price,
                quantity: item.quantity
            }
        })

        const sale = {
            user_id: userId,
            client,
            products,
            total
        }

        try {
            const { data } = await inventoryDb.post('/sales', sale, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            toast.success(data.message);

        } catch (error) {
            console.log(error);
            if( isAxiosError(error) ){
                toast.error(error.response?.data.message);
            }
        }


    }
})


export const useSaleStore = create<SaleState & Actions>()(
    storeApi
);