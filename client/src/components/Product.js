import { useState } from "react";
import axios from "axios";
import EditForm from "./EditForm";

const Product = ({ setProducts, setCartItems, _id, title, quantity, price }) => {
  const [formVisible, setFormVisible] = useState(false);
  const product = { _id, title, quantity, price };
  const isDisabled = quantity === 0;

  const handleDelete = (e) => {
    e.preventDefault();

    try {
      axios.delete(`/api/products/${_id}`);
      setProducts((prev) => prev.filter((p) => p._id !== _id));
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
  };

  const updateItemQuantity = (cartItems, quantity) => {
    return cartItems.map(item => {
      if (item.productId === _id) {
        item.quantity = quantity;
      }
      return item;
    });
  }

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/add-to-cart/`, {productId: _id});
      const data = response.data;

      setCartItems(prev => {
        const itemExists = prev.find(p => p.productId === _id);

        if (itemExists) {
          return updateItemQuantity(prev, data.item.quantity);
        } else {
          return prev.concat(data.item);
        }
      });
      setProducts(prev => {
        return prev.map(p => {
          if (p._id === data.product._id) {
            return data.product;
          } else {
            return p;
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price.toFixed(2)}</p>
        <p className="quantity">{quantity} left in stock</p>
        {!formVisible && (
          <div className="actions product-actions">
            <a onClick={handleAddToCart} className={isDisabled ? "button disabled add-to-cart" : "button add-to-cart"}>Add to Cart</a>
            <a onClick={handleEdit} className="button edit">
              Edit
            </a>
          </div>
        )}
        <a className="delete-button" onClick={handleDelete}>
          <span onClick={handleDelete}>X</span>
        </a>
      </div>
      {/* {formVisible && <p>Hello</p>} */}
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
