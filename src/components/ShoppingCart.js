import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { shopItems } from "../Data";

const ShoppingCart = () => {
  // to be able to manipulate cart
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(shopItems);
  const [cartTotal, setCartTotal] = useState(0);
  const [toggled, toggle] = useState(false);

  //   -----------------------------------------------------------------------------
  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  //   -----------------------------------------------------------------------------

  const addToCart = (el) => {
    // el = element
    // function for adding something to my cart
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }
    if (addIt) {
      setCart([...cart, el]);
      total();
    }
  };

  // ----------------------------------------------------------------
  const handleSubmit = (el) => {
    el.preventDefault();
    // we need to call this method because the browsers default behavior
    // is that it wants to refresh right after submitting the form
    // we don't want that so we need to prevent it

    const newItem = { ...items, id: uuidv4() };
    // create a new state containing the old state plus adding a unique id
    // we need the unique id to prevent from getting a warning when we map the persons in render

    setItems([...items, newItem]);
    // update state with old state and new state
  };
  // ----------------------------------------------------------------

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };
  // listItems
  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: ${el.price} kr `}
      <input
        type="Submit"
        value="Add"
        onChange={handleSubmit}
        onClick={() => addToCart(el)}
      />
    </div>
  ));

  // -------------------------------------------------------------------------
  // cart items
  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: ${el.price} kr `}
      <input
        type="Submit"
        value="Remove"
        onChange={handleSubmit}
        onClick={() => removeFromCart(el)}
      />
    </div>
  ));

  return (
    <div className="container">
      <div className="container-store">
        STORE
        <div>{listItems}</div>
      </div>

      <div className="toggle">{toggled && <>{cartItems}</>}</div>
      <button onClick={() => toggle((toggled) => !toggled)}>
        See Your Cart
        {/* <FaTimes /> */}
      </button>

      {/* -------------------------------------------------- */}

      <div className="cart-total">Total att betala: {cartTotal} kr</div>
      <input className="submit" type="submit" value="close" />
    </div>
  );
};

export default ShoppingCart;
/* <div className="container-cart">
  <div className="cart" onClick={() => setShow(!show)}>
    {cartItems}CART
  </div>
  {show ?
</div>; */
