import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import { AuthLayout, RootLayout } from "../layouts";
import { CategoriesPage, LoginPage, NewCategoryPage, NewProductPage, ProductsPage } from "../pages";


export const router = createBrowserRouter([
    {
        element: <App/>,
        path: '/',
        children: [
            // RUTAS DASHBOARD
            {
                path: 'admin',
                element: <RootLayout/>,
                children: [
                    {
                        path: 'categories',
                        element: <CategoriesPage/>
                    },
                    {
                        path: 'categories/new',
                        element: <NewCategoryPage/>
                    },
                    {
                        path: 'products',
                        element: <ProductsPage/>
                    },
                    {
                        path: 'products/new',
                        element: <NewProductPage/>
                    },
                ]
            },

            // RUTAS AUTH
            {
                path: 'auth',
                element: <AuthLayout/>,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage/>
                    }
                ]
            }
        
        ]

    }
]);