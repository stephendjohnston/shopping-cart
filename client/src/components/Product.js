import axios from "axios";

const Product = ({ setProducts, _id, title, quantity, price }) => {
  const handleDelete = (e) => {
    e.preventDefault();

    try {
      axios.delete(`/api/products/${_id}`);
      setProducts((prev) => prev.filter(p => p._id != _id));
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart">Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button" onClick={handleDelete}>
          <span onClick={handleDelete}>X</span>
        </a>
      </div>
    </div>
  );
};

export default Product;
