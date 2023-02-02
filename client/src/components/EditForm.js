import { useState } from "react";
import axios from "axios";
import InputGroup from "./InputGroup";

const EditForm = ({setProducts, setFormVisible, formVisible, _id, title, quantity, price}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newPrice, setNewPrice] = useState(price);

  const handleUpdate = (e) => {
    e.preventDefault();

    try {
      axios.put(`/api/products/${_id}`, {newTitle, newQuantity, newPrice});

      setProducts((prev) => prev.map(p => {
        if (p._id === _id) {
          return {_id, newTitle, newQuantity, newPrice};
        } else {
          return p;
        }
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const handleCancel = (e) => {
    e.preventDefault();

    setFormVisible(!formVisible);
  }

  return (
    <div class="add-form">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
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
            <a onClick={handleUpdate} className="button">Add</a>
            <a onClick={handleCancel} className="button">Cancel</a>
          </div>
        </form>
      </div>
  )
}

export default EditForm;