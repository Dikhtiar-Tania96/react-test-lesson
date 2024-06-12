import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar/Navbar";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage/>}/>
      </Routes>
    </div>
  );
}
export default App;
