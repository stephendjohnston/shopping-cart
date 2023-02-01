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

export default Product;
