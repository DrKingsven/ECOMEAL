import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import "./AppBarMenu.css";
import { Button, FormControlLabel } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "15px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
  // color: 'inherit',
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "90%",
      },
    },
  },
  fontSize: "18px",
  lineHeight: "24px",
  borderRadius: "12px",
  // color: "#242424",
  color: "#fff",
  padding: "9px 30px 9px 10px",
  margin: 0,
  borderRadius: "8px",
  // background: "#fff",
  appearance: "none",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
}));

export default function AppBarMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: "none" }} position="static">
        <Toolbar className={"menuApp"}>
          <Box className="headerBox">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontSize: "2rem" }}
            >
              ECOMEAL &#127822;
            </Typography>
            {/* <IconButton
                        size="large"
                        edge="start"
                        sx={{marginRight: "10px", borderRadius: "10px", border:  "1px solid #fff"}}
                        color="inherit"
                        aria-label="open drawer"
                       
                    >
                        <MenuIcon sx={{ fontSize: "2rem"}} />
                    </IconButton> */}
          </Box>
          <Box className="headerSearch">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Поиск..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box className="headerBox">
            
            <FormControlLabel
           
              value="bottom"
              control={
                <IconButton component="a" href="/profile" sx={{ color: "#fff" }}>
                  <PersonIcon fontSize="large" />{" "}
                </IconButton>
              }
              label="Профиль"
              labelPlacement="bottom"
            />

            <FormControlLabel
              value="bottom"
              control={
                <IconButton sx={{ color: "#fff" }}>
                  <LocalShippingIcon fontSize="large" />{" "}
                </IconButton>
              }
              label="Доставка"
              labelPlacement="bottom"
            />

            <FormControlLabel
              value="bottom"
              control={
                <IconButton 
                href="/basket"
                sx={{ color: "#fff" }}>
                  <ShoppingCartIcon fontSize="large" />{" "}
                </IconButton>
              }
              label="Корзина"
              labelPlacement="bottom"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
