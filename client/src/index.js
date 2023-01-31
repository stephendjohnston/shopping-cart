import React from "react";
import ReactDOM from "react-dom/client";

const e = React.createElement;

const Product = ({ name, price, quantity }) => {
  return e("div", {
    className: "product",
    children: [
      e("div", {
        className: "product-details",
        children: [
          e("h3", null, name),
          e("p", { className: "price" }, price),
          e("p", { className: "quantity" }, `${quantity} left in stock`),
          e("div", {
            className: "actions product-actions",
            children: [
              e("a", { className: "button add-to-cart" }, "Add to Cart"),
              e("a", { className: "button edit" }, "Edit"),
            ],
          }),
          e("a", {
            className: "delete-button",
            children: [e("span", null, "X")],
          }),
        ],
      }),
    ],
  });
};

const InputGroup = ({ labelId, labelName }) => {
  e("div", {
    className: "input-group",
    children: [
      e(
        "label",
        {
          for: labelId,
        },
        labelName
      ),
      e(
        "input",
        {
          type: "text",
          id: labelId,
          value: "",
        },
        labelName
      ),
    ],
  });
};

const Form = () => {
  return e("div", {
    className: "add-form",
    children: [
      e("p", {
        children: [
          e(
            "a",
            {
              className: "button add-product-button",
            },
            "Add a Product"
          ),
        ],
      }),
      e("h3", null, "Add Product"),
      e("form", {
        children: [
          e(InputGroup, { labelId: "product-name", labelName: "Product Name" }),
          e(InputGroup, { labelId: "product-price", labelName: "Price" }),
          e(InputGroup, { labelId: "product-quantity", labelName: "Quantity" }),
          e("div", {
            className: "actions form-actions",
            children: [
              e("a", { className: "button" }, "Add"),
              e("a", { className: "button" }, "Cancel"),
            ],
          }),
        ],
      }),
    ],
  });
};

const App = () => {
  return e("main", {
    children: [
      e("div", {
        className: "product-listing",
        children: [
          e("h2", null, "Products"),
          e(Product, {
            name: "Amazon Kindle e-Reader",
            price: "$79.99",
            quantity: "5",
          }),
          e(Product, {
            name: "Apple 10.5-inch iPad",
            price: "$649.99",
            quantity: "2",
          }),
          e(Product, {
            name: "Yamaha Portable Keyboard",
            price: "$155.99",
            quantity: "0",
          }),
        ],
      }),
      e(Form),
    ],
  });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
