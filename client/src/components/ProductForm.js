import { useState } from "react";
import axios from "axios";
import InputGroup from "./InputGroup";

const ProductForm = ({ setProducts }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [formVisible, setFormVisible] = useState(false);
  // console.log("From ProductForm.js", {title, price, quantity})

  const handleClick = (e) => {
    e.preventDefault();
    setFormVisible(!formVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { title, price, quantity };

    try {
      const response = await axios.post("/api/products", product);
      setProducts((prev) => [...prev, response.data]);
      setFormVisible(false);
      resetForm();
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    resetForm();
    setFormVisible(!formVisible);
  };

  const resetForm = () => {
    setTitle("");
    setPrice();
    setQuantity();
  };

  return (
    <div className="add-form.visible">
      {!formVisible && (
        <p>
          <a className="button add-product-button" onClick={handleClick}>
            Add A Product
          </a>
        </p>
      )}
      {formVisible && (
        <>
          <h3>Add Product</h3>
          <form>
            <InputGroup
              value={title}
              onChange={setTitle}
              labelId={"product-name"}
              labelName={"Product Name"}
            />
            <InputGroup
              value={price}
              onChange={setPrice}
              labelId={"product-price"}
              labelName={"Price"}
            />
            <InputGroup
              value={quantity}
              onChange={setQuantity}
              labelId={"product-quantity"}
              labelName={"Quantity"}
            />
            <div className="actions form-actions">
              <a className="button" onClick={handleSubmit}>
                Add
              </a>
              <a className="button" onClick={handleCancel}>
                Cancel
              </a>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ProductForm;
