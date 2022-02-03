import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./CartItem.scss";
import { useDispatch, useSelector } from "react-redux";
import { plusMinusItem, removeFromCart } from "redux/actions/cartActions";

function CartItem(props) {
  const cart_list = useSelector((state) => state.cart.cart_items);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(props.details.quantity);
  const [sellingPrice, setSellingPrice] = useState();
  let price = props.details.details.price;

  const calculations = useCallback(() => {
    let discounted_price = price;
    discounted_price *= 1 - props.details.details.discount / 100;
    discounted_price = Math.floor(discounted_price);
    setSellingPrice(discounted_price);
  }, [price,props.details.details.discount]);
  const handlePlusMinus = () => {
    setCounter(props.details.quantity);
    dispatch(plusMinusItem(props.details));
    localStorage.setItem("cart", JSON.stringify(cart_list));
    props.setData();
  };
  const handlePlus = () => {
    props.details.quantity += 1;
    handlePlusMinus();
  };
  const handleMinus = () => {
    props.details.quantity -= 1;
    handlePlusMinus();
  };
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(props.details.details.id,props.details.details.name));
  };
  useEffect(() => {
    calculations();
  }, [counter,calculations]);
  return (
    <div className="cartitem-parent">
      <div className="cartitem">
        <div className="cartitem_img">
          <img
            src={props.details.details.images[0]}
            alt={props.details.details.name}
          />
        </div>
        <div className="cart-item-right">
          <div className="name-delivery">
            <div className="item-name">{props.details.details.name}</div>
            <div className="delivery-in">Delivery in 2 days|₹40</div>
          </div>
          <div className="pack-of">
            {props.details.details.specifications.attributes[0].inTheBox.packOf}
          </div>
          <div className="seller-assured">
            <div>Seller:{props.details.details.seller[0].name}</div>
            <div className="assured">
              <img
                height="15"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                alt="assured"
              />
            </div>
          </div>
          <div>
            <span className="disc-price">
              ₹{sellingPrice * props.details.quantity}
            </span>
            <span className="price-actual">₹{price * counter}</span>
            <span className="disc-offer">
              <span>{props.details.details.discount}% Off</span>
              <span className="offer">
                <span>1 offer applied </span>
                <div className="info">i</div>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="plusminus">
          <button
            disabled={props.details.quantity > 1 ? false : true}
            className="min-plus-btn"
            onClick={handleMinus}
          >
            -
          </button>
          <div>{props.details.quantity}</div>
          <button
            variant="outlined"
            className="min-plus-btn"
            onClick={handlePlus}
          >
            +
          </button>
        </div>
        <Button variant="text" sx={{ color: "black", marginLeft: "24px" }}>
          save for later
        </Button>
        <Button
          variant="text"
          sx={{ color: "black", marginLeft: "24px" }}
          onClick={handleRemoveFromCart}
        >
          remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
