import { useState } from "react";
import axios from "axios";
import InputGroup from "./InputGroup";

const EditForm = ({
  setProducts,
  setFormVisible,
  _id,
  title,
  quantity,
  price,
}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newPrice, setNewPrice] = useState(price);
  // console.log("From EditForm.js", {newTitle, newPrice, newQuantity, _id})
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = await axios.put(`/api/products/${_id}`, {
        title: newTitle,
        quantity: newQuantity,
        price: newPrice,
      });

      setProducts((prev) => {
        return prev.map((p) => {
          if (p._id === _id) {
            return updatedProduct.data;
          } else {
            return p;
          }
        });
      });
      setFormVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();

    setFormVisible(false);
  };

  return (
    <div className="add-form.visible" style={{ paddingTop: "30px" }}>
      <h3>Edit Product</h3>
      <form>
        <InputGroup
          value={newTitle}
          onChange={setNewTitle}
          labelId={"product-name"}
          labelName={"Product Name"}
        />
        <InputGroup
          value={newPrice}
          onChange={setNewPrice}
          labelId={"product-price"}
          labelName={"Price"}
        />
        <InputGroup
          value={newQuantity}
          onChange={setNewQuantity}
          labelId={"product-quantity"}
          labelName={"Quantity"}
        />

        <div className="actions form-actions">
          <a onClick={handleUpdate} className="button">
            Update
          </a>
          <a onClick={handleCancel} className="button">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
