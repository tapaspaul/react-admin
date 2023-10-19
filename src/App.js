import './App.css';
import Header from './components/Layout/Header/Header';
import SideNav from './components/Layout/SideNav/SideNav';
import CartProvider from './components/Store/CartProvider';
// import InvestmentCalculator from './components/Views/InvestmentCalculator/InvestmentCalculator';
// import PixelToRem from './components/Views/PxToRem/PixelToRem';
import Meals from './components/Views/Meals/Meals';
function App() {
    return (
        <div className="App">
            <main id="site_wrapper" className="transition">
                <CartProvider>
                    <SideNav />
                    <Header />
                    <div className="site-content">
                        {/* <InvestmentCalculator /> */}
                        {/* <PixelToRem /> */}
                        <Meals />
                    </div>
                </CartProvider>
            </main>
        </div>
    );
}
export default App;