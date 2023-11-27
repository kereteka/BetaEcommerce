import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../features/product/searchTermSlice";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  borderRadius: 40,
  borderStyle: "solid",
  borderColor: theme.palette.common.lightGrey,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 20,
  width: 800,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(20),
    width: 800,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const StyledSearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.primaryColor,
  color: "white",
  textTransform: "capitalize",
  borderRadius: "0 40px 40px 0",
  marginLeft: theme.spacing(1),
  opacity: 0.9,
  width: 150,
  // marginRight: theme.spacing(1),
}));

export default function SearchAppBar() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const onSearch = (searchTerm) => {
    setData(searchTerm);
  };

  const handleSearch = () => dispatch(setSearchTerm(data));

  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Box
            component="img"
            width={125}
            alt="Beta Limited"
            src="https://beta.limited/assets/images/logo-dark.png"
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: theme.palette.common.darkGrey }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Searching for…"
              inputProps={{
                "aria-label": "search",
                onChange: (e) => onSearch(e.target.value),
              }}
            />
            <StyledSearchButton onClick={handleSearch}>
              Search
            </StyledSearchButton>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
