import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

// import Banana from "../images/banana.jpg";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function CardList() {

    const [products, setProducts] = React.useState([]);

    
    // console.log(JSON.parse(localStorage.getItem('basket')))


    React.useEffect(() => {
        fetch('http://127.0.0.1:3000/v1/products', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            },
           })
           .then((res) => res.json())
           .then((data) => {
            // console.log(data.products)
              setProducts(data.products);
           })
           .catch((err) => {
              console.log("error", err.message);
           });
     }, []);
   

    const { category } = useParams();

    const filteredData = category && category !== "all"
        ? products.filter(item => item.category.toLowerCase() === category.toLowerCase())
        : products;

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: "rgb(92, 199, 78)",
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'rgba(9, 121, 109, 1)',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: 'rgba(9, 121, 109, 1)',
            borderColor: '#005cbf',
        },
    }));

    const CustomCardContent = styled(CardContent)(({ theme }) => ({
        height: "60px",
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        paddingBottom: "30px",
    }));

    return (
        <Box sx={{ margin: 4 }}>
            <Outlet />
            <Grid container spacing={3}>
                {filteredData.map(card => (
                    <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ width: 320, backgroundColor: "#f5f5f5" }}>
                            <Link to={`${card.id}`}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={Banana}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Link>
                            <CustomCardContent sx={{ borderTop: "1px solid #ccc" }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.price}р.
                                </Typography>
                                <Typography sx={{ lineClamp: 1, WebkitLineClamp: 1, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }} variant="h6" color="text.secondary" component="div">
                                    {card.name}
                                </Typography>
                            </CustomCardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <CustomButton  variant='contained' size="small" color="primary">
                                    Купить
                                </CustomButton>
                                <CustomButton variant='contained' size="small" color="primary">
                                    В корзину <AddShoppingCartIcon />
                                </CustomButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
