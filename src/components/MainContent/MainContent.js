import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "redux/actions/productActions";
import ProductCard from "components/ProductCard/ProductCard";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import "./MainContent.scss";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

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
];
function MainContent() {
  const dispatch = useDispatch();
  const product_list = useSelector((state) => state.products.product_list);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <div className="main-content">
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        className="breadcrumb"
        sx={{ marginBottom: "10px" }}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <span className="page-heading">Mobile Camera Lens Protectors</span>
      <Grid
        container
        columns={{ xs: 6, sm: 9, md: 12 }}
        sx={{ marginTop: "8px" }}
      >
        {product_list.map((row) => (
          <Grid item xs={3} sm={3} md={3} key={row.name}>
            <Item elevation={0}>
              <ProductCard details={row} />
            </Item>
          </Grid>
        ))}
      </Grid>
      <div className="pagination-footer">
        <Pagination count={10} size="small" color="primary" />
      </div>
    </div>
  );
}

export default MainContent;
