import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Button, CardActionArea, CardActions, Grid} from '@mui/material';
import {products} from "../products"
export default function CardList({filterClass}) {
    // Массив данных для карточек
    const cardData = products
//     const allCategories = products.map(product => product.category);
//
// // Фильтруем уникальные категории
//     const uniqueCategories = [...new Set(allCategories)];
//
//     console.log(filterClass);
    return (
<Box sx={{margin: 5}}>
        <Grid container spacing={2}>
            {cardData.filter(item => filterClass ? item.category === filterClass : item).map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345, height:300 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={card.image}
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    {card.price}₽

                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
</Box>
    );
}
