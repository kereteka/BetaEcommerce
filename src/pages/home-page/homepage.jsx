import { Box, Button, Container, Grid, useTheme } from "@mui/material";
import ProductList from "../../features/product/ProductList";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "50px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mx: "auto" }}
        >
          <ProductList />
        </Grid>
      </Box>
      <Button
        sx={{
          color: "white",
          backgroundColor: theme.palette.common.primaryColor,
          marginX: "auto",
          marginTop: "20px",
          display: "block",
        }}
      >
        Load more...
      </Button>
    </Container>
  );
};

export default HomePage;
