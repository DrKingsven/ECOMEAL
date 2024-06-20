import * as React from "react";

import {
  Box,
  ButtonGroup,
  Divider,
  Grid,
  IconButton,
  Paper,
  Rating,
  styled,
} from "@mui/material";
import { Outlet, useParams } from "react-router-dom";
import { products } from "../../products";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RepeatIcon from "@mui/icons-material/Repeat";
import "./Basket.css";
import productStore from "../../store/productStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createBasket, patchBasket } from "../apiCreate";
import { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
const Basket = observer(() => {
  React.useEffect(() => {
    productStore.fetchBasket();
    productStore.fetchUser(1);
  }, []);
  const basket = productStore.basket;
  const user = productStore.user;
 

  //   console.log(user.discount)

  const Counter = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const timerRef = React.useRef(null);

    useEffect(() => {
      if (quantity !== product.quantity) {
        
        // Очистка предыдущего таймера, если он есть
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }

        // Установка нового таймера
        timerRef.current = setTimeout(() => {
          patchBasket({ ...product, quantity: quantity });
          // Очистка таймера после выполнения функции
          timerRef.current = null;
        }, 500); // Задержка 500 мс (можете настроить по вашему желанию)
      }


      // Очистка таймера при размонтировании компонента
      return () => {
       
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        
      };
    }, [quantity, product, patchBasket]);

    return (
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexFlow: "nowrap",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              // width: "25%",
              display: "flex",
              flexFlow: "nowrap",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              <ArrowCircleLeftIcon
                sx={{ color: "rgb(92, 199, 78)" }}
                color="success"
                fontSize="large"
              />
            </IconButton>
            {quantity}
            <IconButton onClick={() => setQuantity(quantity + 1)}>
              <ArrowCircleRightIcon
                sx={{ color: "rgb(92, 199, 78)" }}
                fontSize="large"
              />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "15px" }} className="priceBasketMin">
            С учетом скидки
          </Typography>
          <Typography sx={{ fontSize: "20px" }} className="priceBasket">
            {product.price * quantity -
              ((product.price * quantity) / 100) * user?.discount}
            р.
          </Typography>
          <Typography
            //   color="text.secondary"
            sx={{ fontSize: "20px", textDecoration: "line-through" }}
            className="priceBasket"
          >
            {product.price * quantity}р.
          </Typography>
        </Box>
      </Box>
    );
  };

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: payment ? "rgb(92, 199, 78)" : "#ccc",
    color: "#fff",
    fontWeight: 700,
    width: "50%",

    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgb(98, 199, 78)",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(92, 199, 78)",
      borderColor: "#fff",
    },
  }));

  const CustomButtonNotPayment = styled(Button)(({ theme }) => ({
    backgroundColor: payment ? "#ccc" : "rgb(92, 199, 78)",
    fontWeight: 700,
    width: "50%",

    color: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgb(98, 199, 78)",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(92, 199, 78)",
      borderColor: "#fff",
    },
  }));

  const today = new Date(); // Получаем сегодняшнюю дату
  const threeDaysLater = new Date(today); // Создаем копию сегодняшней даты
  threeDaysLater.setDate(today.getDate() + 3); // Добавляем 3 дня
  const [payment, setPayment] = useState(true);
  const getMonthName = (date) => {
    return date.toLocaleString("ru-RU", { month: "long" }); // Получаем название месяца
  };

  const getDay = (date) => {
    return date.getDate(); // Получаем число
  };

  const threeDaysLaterMonthName = getMonthName(threeDaysLater);
  const threeDaysLaterDay = getDay(threeDaysLater);

  const CustomImgBox = styled(Button)(({ theme }) => ({
    border: "1px solid #000",
    width: "20%",
    marginLeft: "10px",
    marginBottom: "10px",
    borderRadius: "17px",
    padding: 0,
  }));

  //   const CustomButtonShop = styled(Button)(({ theme }) => ({
  //     backgroundColor: "rgba(9, 121, 109, 1)",
  //     color: "#fff",
  //     width: "100%",
  //     marginTop: "10px",
  //     boxShadow: "none",
  //     "&:hover": {
  //       backgroundColor: "rgba(9, 121, 109, 1)",
  //       borderColor: "#fff",
  //       boxShadow: "none",
  //     },
  //     "&:active": {
  //       boxShadow: "none",
  //       backgroundColor: "rgba(9, 121, 109, 1)",
  //       borderColor: "#fff",
  //     },
  //   }));

  return (
    <Paper sx={{ height: "100vh" }}>
      <Grid
        sx={{ paddingBottom: "30px", paddingTop: "30px" }}
        container
        spacing={2}
      >
        <Grid item xs={8}>
          <Card
            sx={{
              minHeight: "80vh",
              marginLeft: "10px",
              borderRadius: "16px",
              // height: "70%",
              boxShadow: "0 2px 16px rgba(0,0,0,.08)",
            }}
          >
            <CardContent>
              {basket.map((product) => {
                return (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexFlow: "nowrap",
                      alignItems: "center",
                      alignContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ display: "flex", width: "100%" }}>
                      <CustomImgBox
                      //  onClick={() => setActiveImg(product)}
                      >
                        <img
                          className="productImg"
                          src={`http://127.0.0.1:3000/image/${product.productImg[0]}?raw=true`}
                          alt={product.name}
                        />
                      </CustomImgBox>
                      <Box>
                        <Typography
                          sx={{ fontSize: "20px", margin: "10px" }}
                          className="basketList"
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: "15px", margin: "10px" }}
                          color="text.secondary"
                        >
                          Артикул: {product.article}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ fontSize: "15px", margin: "10px" }}
                        >
                          Продавец: {product.shop.name}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          sx={{ fontSize: "15px", margin: "10px" }}
                        >
                          Страна: {product.shop.country}
                        </Typography>
                      </Box>
                    </Box>
                    <Counter product={product} />

                    <Divider />
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ paddingRight: "10px" }} item xs={4}>
          <Card
            sx={{
              borderRadius: "16px",
              // height: "80%",
              boxShadow: "0 2px 16px rgba(0,0,0,.08)",
              // paddingTop: "20px",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: "20px", margin: "10px" }}
                className="basketList"
              >
                Адрес доставки
              </Typography>
              <Typography
                sx={{ fontSize: "15px", margin: "10px" }}
                color="text.secondary"
              >
                {user?.adress}
              </Typography>
              <Typography
                sx={{ fontSize: "20px", margin: "10px" }}
                className="basketList"
              >
                {threeDaysLaterDay + " " + threeDaysLaterMonthName}
              </Typography>
              <Typography
                sx={{ fontSize: "20px", margin: "10px" }}
                className="basketList"
              >
                Способ оплаты
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup sx={{ width: "100%" }} variant="text">
                  <CustomButtonNotPayment onClick={() => setPayment(false)}>
                    При получении
                  </CustomButtonNotPayment>
                  <CustomButton onClick={() => setPayment(true)}>
                    Сразу
                  </CustomButton>
                </ButtonGroup>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
});
export default Basket;
