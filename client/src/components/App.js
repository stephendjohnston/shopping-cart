import { useState, useEffect } from "react";
import axios from "axios";
import ProductListing from "./ProductListing";
import ProductForm from "./ProductForm";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [setProducts]);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      </header>
      <main>
        <ProductListing products={products} setProducts={setProducts} />
        <ProductForm setProducts={setProducts} />
      </main>
    </div>
  );
};

export default App;
