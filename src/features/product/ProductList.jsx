import { useListProductQuery } from "./api";
import ProductCard from "../../components/ProductCard";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const ProductList = () => {
  const searchTerm = useSelector((state) => state.searchTerm.searchTerm);

  const { data, isError, isLoading } = useListProductQuery(searchTerm);

  if (isLoading) {
    return <div>Data Is Loading</div>;
  }
  if (isError) {
    return <div>There is an error</div>;
  }

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      sx={{ marginTop: "20px" }}
    >
      {data &&
        data.map((product) => (
          <Grid item xs={6} sm={4} md={4} key={product.id}>
            <ProductCard product={product} key={product.id} />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProductList;
