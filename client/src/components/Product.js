import { useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";

const Product = ({ setProducts, _id, title, quantity, price }) => {
  const [formVisible, setFormVisible] = useState(false);
  const product = { _id, title, quantity, price };
  const buttonDisabled = quantity === 0 ? true : false;

  const handleDelete = (e) => {
    e.preventDefault();

    try {
      axios.delete(`/api/products/${_id}`);
      setProducts((prev) => prev.filter((p) => p._id != _id));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {!formVisible && (
          <div className="actions product-actions">
            <a
              className={
                buttonDisabled ? "button.disabled" : "button add-to-cart"
              }
            >
              Add to Cart
            </a>
            <a onClick={handleEdit} className="button edit">
              Edit
            </a>
          </div>
        )}
        <a className="delete-button" onClick={handleDelete}>
          <span onClick={handleDelete}>X</span>
        </a>
      </div>
      {formVisible && (
        <EditForm
          setProducts={setProducts}
          setFormVisible={setFormVisible}
          formVisible={formVisible}
          {...product}
        />
      )}
    </div>
  );
};

export default Product;
