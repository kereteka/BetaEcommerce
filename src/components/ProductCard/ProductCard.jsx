// ProductCard.js

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Paper,
  useTheme,
  CardActions,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import ProductRating from "../ProductRating";
import {
  useAddToCartMutation,
  useSubtractFromCartMutation,
  useViewCartQuery,
} from "../../features/product/api";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const theme = useTheme();
  const [addToCart] = useAddToCartMutation();
  const [subtractFromCart] = useSubtractFromCartMutation();
  const { data, refetch, isFetching } = useViewCartQuery();
  // eslint-disable-next-line react/prop-types
  const { id, name, price, originalPrice, discount, image, rating } = product;

  let foundData = data?.find((item) => item.productId === id);

  console.log(foundData, "foundData");

  const handleSubtractFromCart = async () => {
    if (!isFetching) {
      await subtractFromCart(id);
      await refetch();
    }
  };

  const handleAddToCart = async () => {
    if (!isFetching) {
      await addToCart(id);
      await refetch();
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 375,
        minHeight: 400,
        position: "relative",
        backgroundColor: theme.palette.common.white,
        borderRadius: "12px",
        mx: "auto",
        width: "100%",
      }}
    >
      <Paper
        sx={{
          position: "absolute",
          backgroundColor: theme.palette.common.primaryColor,
          color: "white",
          paddingY: "4px",
          paddingX: "16px",
          zIndex: 1,
          margin: 2,
          borderRadius: "20px",
        }}
      >
        {discount}
      </Paper>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
        sx={{
          bgcolor: theme.palette.common.lightGrey,
        }}
      />
      <CardContent sx={{ textAlign: "left" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", pb: 1 }}>
          <ProductRating value={rating} />
          <Typography
            // gutterBottom
            variant="body2"
            sx={{
              color: theme.palette.common.darkGrey,
              alignSelf: "bottom",
              pl: 1,
            }}
          >
            ({rating})
          </Typography>
        </Box>
        <Box sx={{ display: "flex", font: "bold" }}>
          <Typography variant="body1" color={theme.palette.common.primaryColor}>
            ${price}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              textDecoration: "line-through",
              color: theme.palette.common.darkGrey,
              ml: 1,
            }}
          >
            ${originalPrice}
          </Typography>
          <CardActions>
            {data?.find((item) => item.productId === id)?.quantity !== 0 && (
              <Box>
                <Button
                  variant="outlined"
                  color="error"
                  style={{
                    position: "absolute",
                    bottom: theme.spacing(9),
                    right: theme.spacing(2),
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                  onClick={handleSubtractFromCart}
                >
                  <RemoveIcon />
                </Button>
                <Typography
                  style={{
                    color: "black",
                    position: "absolute",
                    bottom: theme.spacing(5.8),
                    right: theme.spacing(3.2),
                  }}
                >
                  {data && foundData?.quantity}
                </Typography>
              </Box>
            )}
            <Button
              variant="outlined"
              color="error"
              style={{
                position: "absolute",
                bottom: theme.spacing(2),
                right: theme.spacing(2),
                maxWidth: "30px",
                maxHeight: "30px",
                minWidth: "30px",
                minHeight: "30px",
              }}
              onClick={handleAddToCart}
            >
              <AddIcon />
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
