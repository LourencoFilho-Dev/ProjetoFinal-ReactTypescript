import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import {Cart} from "./pages/Cart";
import About from "./pages/About";
import MyNavBar from "./components/MyNavBar";
import Registro from "./pages/Registro";
import Profile from "./pages/Profile"; 
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <MyNavBar />
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product-details/:idProduct" element={<Details />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/profile" element={<Profile />} /> {}
                    </Routes>
                </CartProvider>
        </AuthProvider>
    );
}

export default App;
