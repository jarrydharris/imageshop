import {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function NavBar() {
    const [value, setValue] = useState(0);

    return (
        <Box >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
                <BottomNavigationAction label="ImageShop™" icon={<PhotoCameraIcon/>}/>
                <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon/>}/>
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>}/>
            </BottomNavigation>
        </Box>
    );
}

export default NavBar