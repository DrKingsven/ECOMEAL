import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink, Outlet, useLocation } from "react-router-dom";

export default function NavigateMenu() {
  const style = {
    color: "#ffffff",
  };
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
          background:
            "linear-gradient(90deg, rgba(92,199,78,1) 0%, rgba(9,121,109,1) 100%)",
            
        }}
      >
        <Tabs
          indicatorColor="inherit"
          textColor="inherit"
          value={value}
        
          onChange={handleChange}
          aria-label="nav tabs example"
          role="navigation"
        >
          <Tab sx={style} label="Все" value="all" component={NavLink} to="all" />
          <Tab
            sx={style}
            label="Продукты питания"
            value="Продукты питания"
            component={NavLink}
            to="Продукты питания"
          />
          <Tab
            sx={style}
            label="Красота и уход"
            value="Красота и уход"
            component={NavLink}
            to="Красота и уход"
          />
          <Tab
            sx={style}
            label="Фрукты и овощи"
            value="Фрукты и овощи"
            component={NavLink}
            to="Фрукты и овощи"
          />
          <Tab
            sx={style}
            label="Бытовые товары"
            value="Бытовые товары"
            component={NavLink}
            to="Бытовые товары"
          />
          <Tab
            sx={style}
            label="Напитки"
            value="Напитки"
            component={NavLink}
            to="Напитки"
          />
          <Tab
            sx={style}
            label="Детские товары"
            value="Детские товары"
            component={NavLink}
            to="Детские товары"
          />
          <Tab
            sx={style}
            label="Зерновые продукты"
            value="Зерновые продукты"
            component={NavLink}
            to="Зерновые продукты"
          />
          <Tab
            sx={style}
            label="Cувениры"
            value="Подарки и сувениры"
            component={NavLink}
            to="Подарки и сувениры"
          />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
}
