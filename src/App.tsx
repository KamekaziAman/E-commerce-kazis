import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Main/Cards/Cards.tsx";
import HeroProduct from "./components/Main/HeroProduct/HeroProduct.tsx";
import Label from "./components/Main/Label/Label.tsx";
import BottomNavbar from "./components/Navbar/BottomNavbar.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Product from "./components/ProductPage/Product/Product.tsx";
import Grid from "./components/Main/grid/Grid.tsx";
import Footer from "./components/Footer/Footer.tsx";

export default function App() {
  return (
    <div className="overflow-auto custom-scrollbar h-screen">
      <Router>
        <Navbar />
        <BottomNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroProduct />
                <Label
                  Title="New Drops"
                  desc="Stand out with our latest collection—bold designs, premium fabrics,<br /> and street-ready fits. Once they’re gone, they’re gone.Don’t miss out!"
                />
                <Cards />
                <Label
                  Title="Redefine the Rules."
                  desc="lorem ipsum dolor sit amet consectetur adipisicing elit <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Grid />
              </>
            }
          />
          <Route path="/:productName" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
