import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import "./ViewProduct.scss";
import { addToCart, addToRecentlyViewed, getRecentlyViewedItems } from "redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Slider from "components/Slider/Slider";
import { getProductList } from "redux/actions/productActions";

function ViewProduct() {
  const { state } = useLocation();
  const image = state.images;
  const [heroImg, setHeroImg] = useState(image[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state) => state.products.product_list)
  const rv = useSelector((state) => state.cart.recently_viewed);
  let discounted_price = state.price;
  discounted_price *= 1 - state.discount / 100;
  discounted_price = Math.floor(discounted_price);
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/">
      Mobiles &amp; Accessories
    </Link>,
    <Link underline="hover" key="3" color="inherit" href="/">
      Mobiles Accessories
    </Link>,
    <Link underline="hover" key="4" color="inherit" href="/">
      Mobile Camera Lens Protectors
    </Link>,
    <Link underline="hover" key="4" color="inherit" href="/">
      {state.name}
    </Link>,
  ];

  const handleAddToCart = (state) => {
    dispatch(addToCart(state));
    navigate("/cart");
  };
  
  useEffect(() => {
    dispatch(getProductList());
    dispatch(getRecentlyViewedItems());
    dispatch(addToRecentlyViewed(state));
  }, [dispatch,state]);
  return (
    <div>
      <div className="mainContainer">
        <div className="innerContainer">
          <div className="lefty">
            {image && (
              <div className="pics">
                <div className="photoArray">
                  {image.length > 1 &&
                    image.map((row, index) => {
                      return (
                        <div
                          className="singlePhoto"
                          key={index}
                          onMouseEnter={() => {
                            setHeroImg(row);
                          }}
                        >
                          <img src={row} alt={state.slug} />
                        </div>
                      );
                    })}
                </div>
                <div className="bannerPhoto">
                  <img src={heroImg} alt={state.slug} />
                </div>
              </div>
            )}
            <div className="btn-container">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff9f00;" }}
                startIcon={<ShoppingCartIcon />}
                onClick={() => handleAddToCart(state)}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                sx={{ background: "#fb641b;" }}
                startIcon={<FlashOnIcon />}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="right-section">
            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              className="breadcrumb"
              sx={{ marginBottom: "10px" }}
            >
              {breadcrumbs}
            </Breadcrumbs>
            <h3>{state.name}</h3>
            <div className="RRA">
              <span className="rating">{state.ratingReviews.avg_rating} ★</span>
              <span className="review">
                {state.ratingReviews.rating} Ratings &amp;{" "}
                {state.ratingReviews.reviews} Reviews
              </span>
              {state.assured && (
                <img
                  height="21"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  alt="fassured"
                />
              )}
            </div>
            <div className="priceBlock">
              <span className="discountedPrice">₹{discounted_price}</span>
              <span className="price">₹{state.price}</span>
              <span className="discount">{state.discount}% off</span>
            </div>
            <div>
              <h5>Available Offers</h5>
              {state.offers &&
                state.offers.map((row) => (
                  <div className="offers" key={row.description}>
                    <div>
                      <img
                        height="18"
                        width="18"
                        src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                        alt="offer"
                      />
                    </div>
                    <span className="oname">{row.offerType}</span>
                    <span>{row.description}</span>
                    <div className="tc">
                      <span>T &amp; C</span>
                    </div>
                  </div>
                ))}
            </div>
            {state.services.warranty !== "NA" && (
              <div>
                <span className="category-heading">Warranty</span>
                <span>{state.services.warranty}</span>
              </div>
            )}
            {state.services && (
              <div className="services">
                <span className="category-heading">Services</span>
                <div className="service-list">
                  <span className="service-line">
                    <img
                      height="14"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0wIDEwYzAgNS41MjIgNC40NzggMTAgMTAgMTBzMTAtNC40NzggMTAtMTBTMTUuNTIyIDAgMTAgMCAwIDQuNDc4IDAgMTB6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGZpbGw9IiMyODc0RjAiIG1hc2s9InVybCgjYikiIGQ9Ik0tNS41NTYgMjUuNTU2aDMxLjExMlYtNS41NTZILTUuNTU2eiIvPjwvZz48cGF0aCBkPSJNMTEuMDIgNy41MnMyLjI1Ni4xIDIuMjU2IDIuNjFjMCAyLjQ1LTMuMDggMi43MjQtNC4wNyAyLjc1NGEuMTIuMTIgMCAwMC0uMDg3LjJsNC4wOCA0Ljg0NU04LjY1NyA3LjUyaDYuODQ1bS02Ljg0NSAyLjYzNWg2Ljg0NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMzIiIHN0cm9rZT0iI0ZGRiIvPjwvZz48L3N2Zz4="
                      alt="payment"
                    />
                    <span>{state.services.paymentType} available!</span>
                  </span>
                  <span className="service-line">
                    <img
                      height="14"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgLjc1bC02Ljc1IDN2NC41YzAgNC4xNjIgMi44OCA4LjA1NSA2Ljc1IDkgMy44Ny0uOTQ1IDYuNzUtNC44MzggNi43NS05di00LjVMNyAuNzV6bS0xLjUgMTJsLTMtMyAxLjA1OC0xLjA1N0w1LjUgMTAuNjI3bDQuOTQzLTQuOTQyTDExLjUgNi43NWwtNiA2eiIgZmlsbD0iIzIxNzVGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
                      alt="warranty"
                    />
                    <span>{state.services.warranty}</span>
                  </span>
                </div>
              </div>
            )}
            {state.seller &&
              state.seller.map((row) => (
                <div className="seller" key={row.name}>
                  <span className="category-heading">Seller</span>
                  <span className="nameRating">
                    <span className="sname">{row.name}</span>
                    <div className="srating">{row.rating} ★</div>
                  </span>
                  <li>
                    {row.returns
                      ? "No returns applicable!"
                      : "Returns applicable!"}
                  </li>
                </div>
              ))}
            <img
              width="386"
              src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
              alt="supercoins"
            />
            {state.description && (
              <div className="desc">
                <div>
                  <span className="category-heading">Description</span>
                </div>
                <div className="desc-body">{state.description}</div>
              </div>
            )}
            <div className="specs">
              <div className="specs-heading">Specifications</div>
              <Divider />
              <div className="box">
                <div className="box-heading">In The Box</div>
                <div>
                  <div className="box-body-line">
                    <span className="category-heading">Sales Package</span>
                    <span>
                      {state.specifications.attributes[0].inTheBox.salesPackage}
                    </span>
                  </div>
                  <div className="box-body-line">
                    <span className="category-heading">Pack Of</span>
                    <span>
                      {state.specifications.attributes[0].inTheBox.packOf}
                    </span>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="box">
                <div className="box-heading">General</div>
                <div>
                  <div className="box-body-line">
                    <span className="category-heading">Brand</span>
                    <span>
                      {state.specifications.attributes[1].general.brand}
                    </span>
                  </div>
                  <div className="box-body-line">
                    <span className="category-heading">Suitable For</span>
                    <span>
                      {state.specifications.attributes[1].general.suitableFor}
                    </span>
                  </div>
                  <div className="box-body-line">
                    <span className="category-heading">Applied On</span>
                    <span>
                      {state.specifications.attributes[1].general.appliedOn}
                    </span>
                  </div>
                  <div className="box-body-line">
                    <span className="category-heading">Removable</span>
                    <span>
                      {state.specifications.attributes[1].general.removable}
                    </span>
                  </div>
                  <div className="box-body-line">
                    <span className="category-heading">Color</span>
                    <span>
                      {state.specifications.attributes[1].general.color}
                    </span>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="box">
                <div className="box-heading">Dimensions</div>
                <div>
                  <div className="box-body-line">
                    <span className="category-heading">Height</span>
                    <span>
                      {state.specifications.attributes[2].dimensions.height}
                    </span>
                  </div>
                  <div className="box-body-line">
                    <span className="category-heading">Width</span>
                    <span>
                      {state.specifications.attributes[2].dimensions.width}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slider-container">
        <Slider details={list} heading={"Similar Products"} />
      </div>
      {rv.length > 1 && <div className="main-slider-container">
        <Slider details={rv} heading={"Recently Viewed"} />
      </div>}
    </div>
  );
}

export default ViewProduct;
