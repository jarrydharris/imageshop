import {useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptIcon from "@mui/icons-material/Receipt";

function NavBar(props) {
    const [value, setValue] = useState(0);
    return (
        <Box style={boxStyle}>
            <BottomNavigation
                style={navContainerStyle}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Orders" icon={<ReceiptIcon/>}/>
                <BottomNavigationAction onClick={props.onClick} label="ImageShop™" icon={<PhotoCameraIcon/>}/>
                <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon/>}/>
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon/>}/>
            </BottomNavigation>
        </Box>
    );
}

const boxStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "10vh",
    backgroundColor: "#fff"
}

const navContainerStyle = {
    height: "10vh",
    minWidth: "100%"
}

export default NavBar