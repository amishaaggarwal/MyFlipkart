import React, { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { Divider } from "@mui/material";
import CartItem from "components/CartItem/CartItem";
import Button from "@mui/material/Button";
import "./Cart.scss";
import EmptyCart from "pages/EmptyCart/EmptyCart";

function Cart() {
  const cart_list = useSelector((state) => state.cart.cart_items);
  const [netAmount, setnetAmount] = useState();
  const [netDiscount, setnetDiscount] = useState();
  const totalAmount = useCallback(() => {
    let amount = 0,
      discount = 0;
    cart_list.forEach((row) => {
      let discounted_price = row.details.price * row.quantity;
      discounted_price *= 1 - row.details.discount / 100;
      discounted_price = Math.floor(discounted_price);
      amount += row.details.price * row.quantity;
      discount += row.details.price * row.quantity - discounted_price;
    });

    setnetAmount(amount);
    setnetDiscount(discount);
  }, [cart_list]);
  useEffect(() => {
    totalAmount();
  }, [totalAmount]);

  return cart_list.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="container-cart">
      <div className="cart-parent">
        <div className="left-section">
          <div className="header-div-cart">
            <div className="cart-heading">My Cart ({cart_list.length})</div>
            <div className="deliver-parent">
              <div className="deliver-to-span">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg=="
                  alt="deliver_to"
                />
                <span>Deliver to</span>
              </div>
              <TextField
                id="outlined-basic"
                label="Hyderabad-500081"
                variant="outlined"
                sx={{ borderRadius: "2px" }}
              />
            </div>
          </div>
          <div>
            {cart_list.length > 0 &&
              cart_list.map((row, index) => {
                return (
                  <CartItem details={row} key={index} setData={totalAmount} />
                );
              })}
          </div>
          <Divider />
          <div className="btn-div">
            <Button
              variant="contained"
              sx={{ background: "#fb641b;", borderRadius: 0 }}
            >
              place order
            </Button>
          </div>
        </div>
        <div className="right-section">
          <div className="right-top">
            <div className="rt-header">Price Details</div>
            <div className="rt-bottom">
              <div className="rt-bottom-rows">
                <div>Price ({cart_list.length} item)</div>
                <div>₹{netAmount}</div>
              </div>
              <div className="rt-bottom-rows">
                <div>Discount</div>
                <div className="rt-disc">-₹{netDiscount}</div>
              </div>
              <div className="rt-bottom-rows">
                <div>Delivery Charges</div>
                <div>₹{cart_list.length * 40}</div>
              </div>
              <div className="ta">
                <div>Total Amount</div>
                <div>₹{netAmount - netDiscount + cart_list.length * 40}</div>
              </div>
              <span className="saved-row">
                You will save ₹{netDiscount - cart_list.length * 40} on this
                order
              </span>
            </div>
          </div>
          <div className="right-middle">
            <div className="rm-container">
              <div className="rm-head">
                <span>Add items worth ₹271 more for FREE delivery</span>
                <img
                  height="27"
                  src="https://rukminim1.flixcart.com/www/86/86/promos/06/04/2017/32f62e07-a9e4-4bfc-88d8-3eeb8b4be127.png?q=80"
                  alt="truck"
                />
              </div>
              <div className="rm-body">
                Eligible only for
                <img
                  height="16"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt="assured"
                />
                products
              </div>
            </div>
            <div className="rm-bottom">
              <div>Browse Super Value store</div>
              <div>&gt;</div>
            </div>
          </div>
          <div className="right-bottom">
            <div>
              <img
                height="25"
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg"
                alt="checked"
              />
            </div>
            <div className="right-bottom-text">
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
