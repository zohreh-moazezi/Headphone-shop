import React from "react";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-items" id="cart">
      {cartItems.length === 0 && (
        <div className="cart-items-empty">No Items are added</div>
      )}

      <div className="allFeatures">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list ">
            <div className="features ">
              <img
                className="cart-item-img"
                src={item.thumb}
                alt={item.product_name}
              />
              <div className="defines">
                <div className="cart-item-name">{item.product_name}</div>
                <div className="bagDescrip">{item.description}</div>
                <div>{item.bagDescription}</div>
              </div>
            </div>
            <div className="cart-item-function  ">
              <button
                className="cart-item-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <p className="quantity">{item.quantity}</p>
              <button
                className="cart-item-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-item-price ">${item.price}</div>
          </div>
        ))}
      </div>
      <div className="cart-item-price-total-name">
        Total Price
        <div className="cart-item-price-total">${totalPrice}</div>
      </div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            <span>Clear Cart</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
