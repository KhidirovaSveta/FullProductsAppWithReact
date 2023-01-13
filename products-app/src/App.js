import { Route, Routes } from "react-router-dom";
import Products from "./pages/products";
import AddProducts from "./pages/add-products";
import Header from "./layouts/header";
import DetailsPage from "./pages/details-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/pages/products" element={<Products />} />
        <Route path="/pages/add-products" element={<AddProducts />} />
        <Route path="/pages/details-page/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
