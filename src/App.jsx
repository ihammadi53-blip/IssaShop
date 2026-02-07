import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainSection from "./Section";        
import ProductsPage from "./ProductsPage";  
import Contact from "./Contact";
import "./style.css"; 
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/products" element={<ProductsPage />} />                 
        <Route path="/products/:category" element={<ProductsPage />} />     
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
