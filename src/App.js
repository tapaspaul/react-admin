import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import SideNav from './components/Layout/SideNav/SideNav';
import CartProvider from './components/Store/CartProvider';
import InvestmentCalculator from './components/Views/InvestmentCalculator/InvestmentCalculator';
import PixelToRem from './components/Views/PxToRem/PixelToRem';
import Meals from './components/Views/Meals/Meals';
import './App.css';

const router = createBrowserRouter([
    { path: '/react-admin', element: <Meals /> },
    { path: '/pix-to-rem', element: <PixelToRem /> },
    { path: '/investment-calculator', element: <InvestmentCalculator /> }
]);

function App() {
    return (
        <div className="App">
            <main id="site_wrapper" className="transition">
                <CartProvider>
                    <SideNav />
                    <Header />
                    <div className="site-content">
                        <RouterProvider router={ router } />
                    </div>
                </CartProvider>
            </main>
        </div>
    );
}
export default App;