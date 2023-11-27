import { Typography, Rating, useTheme } from "@mui/material";

const ProductRating = ({ value }) => {
  const theme = useTheme();

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
