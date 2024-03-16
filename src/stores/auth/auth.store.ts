import { StateCreator, create } from "zustand";

import { toast } from "sonner";
import { isAxiosError } from "axios";

import { inventoryDb } from "../../api";
import { ILoginResponse, IUser } from "../../interface";
import { persist } from "zustand/middleware";


// GUARDA EL ESTADO1
interface AuthState {
    user: undefined | IUser,
    token: undefined | string,
    authStatus: 'pending' | 'auth' | 'not-auth'
}



// GUARDA LAS FUNCIONES QUE MODIFICA EL ESTADO
interface Actions {
    login: ( email: string, password: string) => Promise<void>;
}



const storeApi: StateCreator<AuthState & Actions> = (set) => ({
    user: undefined,
    token: undefined,
    authStatus: 'pending',

    login : async ( email: string, password: string ) => {

        try {
            const { data } = await inventoryDb.post<ILoginResponse>('/auth/login', { email, password });
            
            // CAMBIAR ESTADO
            set(() => ({
                user: data.user,
                token: data.token,
                authStatus: 'auth',
            }))

            // MOSTRAR MODAL CON USUARIO
            toast.success('Session iniciada', {
                description: 'Bienvenido ' + data.user.name
            });
        } catch (error) {
            // VALIDAR ERROR
            set( () => ({
                user: undefined,
                token: undefined,
                authStatus: 'not-auth'
            }))

            console.log(error)
            
            if( isAxiosError( error ) ){
                // MOSTRAR TOAST CON ERROR
                toast.error('Ocurrio un error', {
                    description: error.response?.data.message
                });
            }
        }
    }
})


export const useAuthStore = create<AuthState & Actions>()(
    persist(
        storeApi,
        {
            name: "auth-store",
        }
    )

)