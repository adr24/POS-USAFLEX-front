import { createBrowserRouter } from "react-router-dom";


import App from "../App";
import { AuthLayout, RootLayout } from "../layouts";
import { CartPage, CategoriesPage, CheckoutPage, LoginPage, NewCategoryPage, NewProductPage, ProductPage, ProductsPage } from "../pages";


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
                    {
                        path: 'products/:slug',
                        element: <ProductPage/>
                    },
                    {
                        path: 'cart',
                        element: <CartPage/>
                    },
                    {
                        path: 'checkout',
                        element: <CheckoutPage/>
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