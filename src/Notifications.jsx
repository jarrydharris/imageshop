import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReceiptIcon from '@mui/icons-material/Receipt';

function Notifications() {
    return (
        <Box sx={boxStyle}>
            <IconButton size="large"><Badge badgeContent={1} color="error">
                <ReceiptIcon/>
            </Badge></IconButton>

            <IconButton size="large"><Badge badgeContent={0} color="error">
                <NotificationsIcon/>
            </Badge></IconButton>
        </Box>
    );
}

const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Notifications