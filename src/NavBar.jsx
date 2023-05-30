import {useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

function NavBar(props) {
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation
            sx={navContainerStyle}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                sx={{...bottomNavStyle, paddingLeft: '2em'}}
                onClick={()=> {props.onClick("home");}}
                label="Home" icon={<HomeIcon/>}
            />
            <BottomNavigationAction
                sx={bottomNavStyle}
                onClick={()=> {props.onClick("cart");}}
                label="Cart"
                icon={<ShoppingCartIcon/>}
            />
            <BottomNavigationAction
                sx={{...bottomNavStyle, paddingLeft: '2em'}}
                label="Profile"
                icon={<AccountCircleIcon/>}
            />
        </BottomNavigation>
    );
}


const navContainerStyle = {
    height: "80px",
    position: 'relative',
    borderBottom: '1px solid #E0E0E0',
    minWidth: "340px",
    maxWidth: "444px",
    bgcolor: '#fff',
    '& .Mui-selected': {'& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {color: '#161f6d'}},
    '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {color: '#00abe1'},

}

const bottomNavStyle = {
    fontWeight: 'bold',
}

export default NavBar