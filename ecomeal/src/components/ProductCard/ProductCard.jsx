import * as React from "react";

import {
  Box,
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
import "./ProductCard.css";
import productStore from "../../store/productStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { createBasket } from "../apiCreate";
import { useState } from "react";

const ProductCard = observer(() => {
  const { id } = useParams();

  React.useEffect(() => {
    productStore.fetchProductById(Number(id));
  }, [id]); // Fetch when id changes

  const productData = productStore.product;

  const [activeImg, setActiveImg] = React.useState(null); // Initialize activeImg
  const [quantity, setQuantity] = useState(1);

  console.log({ ...productData, quantity: quantity });

  React.useEffect(() => {
    // Set activeImg to the first image of the current product when productData changes
    if (productData && productData.productImg.length > 0) {
      setActiveImg(productData.productImg[0]);
    }
  }, [productData]); // Trigger when productData changes

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "rgb(92, 199, 78)",
    color: "#fff",
    width: "100%",
    marginTop: "30px",
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

  const CustomImgBox = styled(Button)(({ theme }) => ({
    // border: "1px solid #000",
    marginLeft: "10px",
    marginBottom: "10px",
    borderRadius: "17px",
    width: "100%",
    padding: 0,
  }));

  const CustomButtonShop = styled(Button)(({ theme }) => ({
    backgroundColor: "rgba(9, 121, 109, 1)",
    color: "#fff",
    width: "100%",
    marginTop: "10px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(9, 121, 109, 1)",
      borderColor: "#fff",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(9, 121, 109, 1)",
      borderColor: "#fff",
    },
  }));

  return (
    <Paper>
      {productData ? (
        <Grid
          sx={{ paddingBottom: "30px", paddingTop: "30px" }}
          container
          spacing={2}
        >
          <Grid item xs={1}>
            {productData.productImg.map((product) => {
              return (
                <CustomImgBox onClick={() => setActiveImg(product)}>
                  <img
                    className="productImg"
                    src={`http://127.0.0.1:3000/image/${product}?raw=true`}
                    alt={productData.name}
                  />
                </CustomImgBox>
              );
            })}
          </Grid>
          <Grid item xs={4}>
            <CustomImgBox>
              <img
                className="productImg"
                src={`http://127.0.0.1:3000/image/${activeImg}?raw=true`}
                alt={productData.name}
              />
            </CustomImgBox>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                marginLeft: "10px",
                borderRadius: "16px",
                // height: "70%",
                paddingTop: "20px",
                boxShadow: 0,
              }}
            >
              <CardContent>
                <Typography
                  sx={{ marginBottom: "20px" }}
                  variant="h5"
                  component="div"
                >
                  {productData.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {productData.description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Артикул: {productData.article}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Страна: {productData.shop.country}
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Продавец: {productData.shop.name}  <br/>               <Rating name="simple-controlled" value={productData.shop.rating} />

                </Typography> */}
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  ИНН: {productData.shop.inn}
                </Typography> */}
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Адрес: {productData.shop.address}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Категория: {productData.category}
                </Typography>
                Рейтинг товара
                <br />
                <Rating name="simple-controlled" value={3} />
              </CardContent>
              <Divider />
              <CardActions>
                <RepeatIcon />
                <Typography> 14 дней на возврат</Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid sx={{ paddingRight: "10px" }} item xs={3}>
            <Card
              sx={{
                borderRadius: "16px",
                // height: "80%",
                boxShadow: "0 2px 16px rgba(0,0,0,.08)",
                // paddingTop: "20px",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: "30px" }} className="price">
                  {productData.price}р.
                </Typography>
                <Typography
                  className="stringRightBox"
                  // sx={{ fontSize: 14 }}
                  color="text.secondary"
                  // gutterBottom
                >
                  Цена без скидки
                </Typography>
                {/* <Typography
                  className="stringRightBox"
                  // sx={{ fontSize: 14 }}
                  color="text.secondary"
                  // gutterBottom
                >
                Добавить в избаранное
                 <IconButton><FavoriteIcon/></IconButton>

                </Typography> */}
                <Typography className="stringRightBox">
                  Продавец: ИП {productData.shop.name} <br />
                </Typography>
                <Typography>
                  <Rating
                    sx={{ marginLeft: "10px" }}
                    name="simple-controlled"
                    value={productData.shop.rating}
                  />
                  {productData.shop.rating}
                </Typography>
                <Typography className="stringRightBox" color="text.secondary">
                  ИНН: {productData.shop.inn}
                </Typography>

                <Typography
                  className="stringRightBox"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  Номер регистрации: {productData.shop.registrationNumber}
                </Typography>

                <CustomButton>Купить</CustomButton>
                {/* {quantity} */}
                <CustomButtonShop
                  onClick={() =>
                    createBasket({ ...productData, quantity: quantity })
                  }
                >
                  В корзину
                </CustomButtonShop>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </Paper>
  );
});
export default ProductCard;
