import axios from "axios";
import CartItem from "./CartItem"

const Cart = ({setCartItems, cartItems}) => {
  const isEmpty = cartItems.length === 0;
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity) ;
    }, 0);
  }

  const handleCheckout = async () => {
    try {
      await axios.post("/api/checkout");
      setCartItems([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {(isEmpty ? <p>Your cart is empty</p> :
        <div>
          <table className="cart-items">
            <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems.map(item => {
              return <CartItem key={item._id} {...item}/>
            })}
            <tr>
              <td colSpan="3" className="total">${getTotalPrice()}</td>
            </tr>
            </tbody>
          </table>
        </div>
      )}
      <a onClick={handleCheckout} className={cartItems.length === 0 ? "button checkout disabled" : "button checkout"}>Checkout</a>
    </div>
  )
}

export default Cart