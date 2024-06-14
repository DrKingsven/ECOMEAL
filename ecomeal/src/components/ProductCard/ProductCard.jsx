import * as React from 'react';

import {Box, Divider, Grid, Paper, Rating, styled} from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { products } from '../../products';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RepeatIcon from '@mui/icons-material/Repeat';
import "./ProductCard.css"
export default function ProductCard() {
    const filterClass = useParams() 
    const productData = products.find(item => item.id === Number(filterClass.id) )
    // const data = JSON.parse(localStorage.getItem('basket'))
    // console.log(data)
    
    const CustomButton = styled(Button)(({ theme }) => ({
      backgroundColor: "rgb(92, 199, 78)",
      color: "#fff",
      width: "100%",
      marginTop: "50px",
      boxShadow: 'none',
      '&:hover': {
          backgroundColor: 'rgb(98, 199, 78)',
          borderColor: '#fff',
          boxShadow: 'none',
      },
      '&:active': {
          boxShadow: 'none',
          backgroundColor: 'rgb(92, 199, 78)',
          borderColor: '#fff',
      },}))

      const CustomButtonShop = styled(Button)(({ theme }) => ({
        backgroundColor: "rgba(9, 121, 109, 1)",
        color: "#fff",
        width: "100%",
        marginTop: "10px",
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: "rgba(9, 121, 109, 1)",
          borderColor: '#fff',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: "rgba(9, 121, 109, 1)",
            borderColor: '#fff',
        },}))

      const ImgBox = styled(Box)(({ theme }) => ({
      margin: "20px"
      }));
    return (
      // <Paper>
<Grid container spacing={2}>
  
  <Grid item xs={5}>
    <ImgBox>
  <img className='productImg' src={`https://github.com/DrKingsven/ECOMEAL/blob/main/ecomeal/src/images/${productData.productImg[0]}?raw=true`} alt={productData.name}/>
  </ImgBox>
  </Grid>
  <Grid item xs={4}>
  <Card sx={{ marginTop: "20px", borderRadius: "16px", height: "70%", paddingTop: "20px"}}>
      <CardContent>
        <Typography sx={{marginBottom: "20px"}} variant="h5" component="div">
          {productData.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {productData.description}

        </Typography>
       

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Артикул: adjective 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Страна: Россия
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Производитель: Россия
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Категория: {productData.category}
        </Typography>
        <Rating
        name="simple-controlled"
        value={3}
       
      />
      </CardContent>
      <Divider/>
      <CardActions>
      <RepeatIcon/><Typography> 14 дней на возврат</Typography>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={3}>

  <Card sx={{ margin: "20px", borderRadius: "16px", height: "80%", paddingTop: "20px"}}>
      <CardContent>
      <Typography variant="h5" component="div">
      { productData.price}р.
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         По карте
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} >
          Продавец
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <CustomButton>Купить</CustomButton>
        <CustomButtonShop>В корзину</CustomButtonShop>

      </CardContent>
      <Divider/>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  </Grid>
</Grid>
// </Paper>
    );
}
