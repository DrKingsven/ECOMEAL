import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, Outlet, useLocation } from "react-router-dom";

export default function NavigateMenu() {
    const style = {
        color: "#ffffff"
    }
    const location = useLocation();
    const [value, setValue] = React.useState(location.pathname);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs

                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <Tab sx={style} label="Все" value="/" component={Link} to="" />
                <Tab sx={style} label="Продукты питания" value="/meal" component={Link} to="meal" />
                <Tab sx={style} label="Красота и уход" value="/beauty" component={Link} to="beauty" />
                <Tab sx={style} label="Фрукты и овощи" value="/vegetables" component={Link} to="vegetables" />
                <Tab sx={style} label="Бытовые товары" value="/household" component={Link} to="household" />
                <Tab sx={style} label="Напитки" value="/drinks" component={Link} to="drinks" />
                <Tab sx={style} label="Детские товары" value="/kids" component={Link} to="kids" />
                <Tab sx={style} label="Зерновые продукты" value="/seed" component={Link} to="seed" />
                <Tab sx={style} label="Подарки и сувениры" value="/gifts" component={Link} to="gifts" />



            </Tabs>
            <Outlet/>
        </Box>
    );
}
