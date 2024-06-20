import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, Outlet, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import productStore from '../store/productStore';

const CardList = observer(() => {
    React.useEffect(() => {
      productStore.fetchProducts();
    }, []);
    const products = productStore.products;

    const { category } = useParams();

    const filteredData = category && category !== "all"
        ? products.filter(item => item.category.toLowerCase() === category.toLowerCase())
        : products;

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: "rgb(92, 199, 78)" ,
        borderColor: "rgba(9, 121, 109, 1)",
        // boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'rgba(9, 121, 109, 1)',

            // borderColor: 'rgba(9, 121, 109, 1)',
            // boxShadow: 'none',
        },
        '&:active': {
            // boxShadow: 'none',
            borderColor: " rgb(92, 199, 78)",

            // backgroundColor: 'rgba(9, 121, 109, 1)',
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
                                <CardActionArea sx={{padding: "10px"}}>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        src={`http://127.0.0.1:3000/image/${card.productImg[0]}?raw=true`}
                                        // image={Banana}
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Link>
                            <CustomCardContent sx={{ borderTop: "1px solid #ccc", paddingBottom: "5px" }}>
                                <Typography gutterBottom variant="h5" sx={{marginBottom: 0}} component="div">
                                    {card.price}р.
                                </Typography>
                                <Typography sx={{ lineClamp: 1, WebkitLineClamp: 1, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden" }} variant="h6" color="text.secondary" component="div">
                                    {card.name}
                                </Typography>
                            </CustomCardContent>
                            <CardActions sx={{ justifyContent: "space-between" }}>
                            <Link to={`${card.id}`}>
                                <CustomButton  variant='contained' color="primary">
                                    Купить
                                </CustomButton>
                                </Link>
                                <CustomButton variant='contained' color="primary">
                                    В корзину <AddShoppingCartIcon />
                                </CustomButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
})
export default CardList