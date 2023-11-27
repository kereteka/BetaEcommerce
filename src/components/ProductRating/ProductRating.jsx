import { Typography, Rating } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProductRating = ({ value }) => {
  return (
    <Typography
      gutterBottom
      style={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Rating name="product-rating" value={value} readOnly />
    </Typography>
  );
};

export default ProductRating;
