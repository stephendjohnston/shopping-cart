import ProductListing from "./ProductListing";
import ProductForm from "./ProductForm";

const App = () => {
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
        <ProductListing />
        <ProductForm />
      </main>
    </div>
  );
};

export default App;
