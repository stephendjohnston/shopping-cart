import { useState, useEffect } from "react";
import axios from "axios";
import ProductListing from "./ProductListing";
import ProductForm from "./ProductForm";
import Cart from "./Cart"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/products");
        const productData = response.data;
        setProducts(productData);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [setProducts]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/cart");
        const cartItemsData = response.data;
        setCartItems(cartItemsData);
      } catch (error) {
        console.log(error)
      }
    })();
  }, [setCartItems])

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart setCartItems={setCartItems} cartItems={cartItems} />
      </header>
      <main>
        {products && products.length > 0 && (
          <ProductListing products={products} setProducts={setProducts} setCartItems={setCartItems} />
        )}
        <ProductForm setProducts={setProducts} />
      </main>
    </div>
  );
};

export default App;
