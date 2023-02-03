import Product from "./Product";

const ProductListing = ({ products, setProducts, setCartItems }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        // console.log({product})
        return (
          <Product key={product._id} setProducts={setProducts} setCartItems={setCartItems} {...product} />
        );
      })}
    </div>
  );
};

export default ProductListing;
