import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard(props) {
  let discounted_price = props.details.price;
  discounted_price *= 1 - props.details.discount / 100;
  discounted_price = Math.floor(discounted_price);
  const navigate = useNavigate();
  const [elevate, setElevate] = useState(0);
  const handleClick = () => {
    navigate(`/product/${props.details.id}`, { state: props.details });
  };
  return (
    <Paper
      sx={{
        maxWidth: "100%",
        padding: "10px",
      }}
      elevation={elevate}
      onMouseOver={() => setElevate(2)}
      onMouseLeave={() => setElevate(0)}
      onClick={handleClick}
      className="card-container"
    >
      <div className="card-img">
        <img src={props.details.images[0]} alt={props.details.slug} />
      </div>

      <div className="card-heading">{props.details.name}</div>

      <div className="ratingReviewAssured">
        <span className="rating">
          {props.details.ratingReviews.avg_rating} ★
        </span>
        <span className="review">
          {" "}
          ({props.details.ratingReviews.reviews}){" "}
        </span>
        {props.details.assured && (
          <img
            height="21"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            alt="fassured"
          />
        )}
      </div>
      <div className="priceBlock">
        <span className="discountedPrice">₹{discounted_price}</span>
        <span className="price">₹{props.details.price}</span>
        <span className="discount">{props.details.discount}% off</span>
      </div>
      <div className="bankOffer">Bank Offer</div>
    </Paper>
  );
}

export default ProductCard;
