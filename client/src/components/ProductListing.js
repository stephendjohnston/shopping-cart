import Product from "./Product";

const ProductListing = ({ products, setProducts }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product key={product._id} setProducts={setProducts} {...product} />
        );
      })}
    </div>
  );
};

export default ProductListing;
