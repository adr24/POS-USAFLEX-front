
import { Outlet } from "react-router-dom"
import { Toaster } from 'sonner'
import Logo from '../../assets/logo.svg'


export const AuthLayout = () => {
    return (
        <>
            <Toaster
                position="top-center"
                richColors
                closeButton
                style={{
                    position: "absolute",
                }}
            />

            <section className="auth__layout">
                <div className="flex items-center mb-4">
                    <img
                        src={ Logo } 
                        alt="Gesty"
                        className="max-w-[70px]" 
                    />

                    <div className="leading-[.5]">
                        <h1 className="text-2xl font-bold">Gesty</h1>
                        <p>Gestiona tu inventario</p>
                    </div>
                </div>

                <Outlet/>
        
            </section>
        
        </>
    )
}
