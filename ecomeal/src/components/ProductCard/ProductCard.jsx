import * as React from 'react';

import {Box, Grid, Paper, styled} from '@mui/material';
import { Outlet, useParams } from 'react-router-dom';
import { products } from '../../products';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function ProductCard() {
    const filterClass = useParams()
    
    const productData = products.find(item => item.id === Number(filterClass.id) )
    console.log(`../../images/${productData.productImg}`)

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
      <Paper>
<Grid container spacing={2}>
  
  <Grid item xs={5}>
  <img src="https://github.com/DrKingsven/ECOMEAL/blob/main/ecomeal/src/images/banana.jpg" alt={productData.name}/>
  </Grid>
  <Grid item xs={2}>
321
  </Grid>
  <Grid item xs={5}>

  <Card sx={{ minWidth: 275, margin: 1}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          belent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>
</Paper>
    );
}
