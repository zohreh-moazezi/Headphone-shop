import React from "react";
import Shop from "./Shop";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Cart from "../Cart/Cart";
import End from "../component/End";

const Routers = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Home />
      <AboutUs />
      <Shop productItems={productItems} handleAddProduct={handleAddProduct} />

      <Cart
        cartItems={cartItems}
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}
        exact
      />
      <End />
    </div>
  );
};

export default Routers;
