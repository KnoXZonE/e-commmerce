import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DetailHeader from "./components/detail-header/DetailHeader";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import { ProductProvider } from "./context/productContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        {/* details header nav */}
        <DetailHeader />

        {/* Header */}
        <Header />

        {/* Home section */}
        {/* <Home /> */}

        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
