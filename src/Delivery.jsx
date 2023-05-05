import Box from "@mui/material/Box";
import ImageIcon from '@mui/icons-material/Image';
import Typography from "@mui/material/Typography";

function Delivery() {
    return (
        <Box sx={outerContainerStyle}>
            <ImageIcon fontSize='large' sx={contrastText}/>
            <Typography fontSize="18px" fontWeight="bold">ImageShop</Typography>
            <Typography fontSize="12px" fontWeight="bold" sx={contrastText}>Shopping, but with your
                camera</Typography>
        </Box>
    )
}

const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '0.5em',
    alignItems: 'center',
    padding: '0.5em',
    backgroundColor: "#00abe1",
    color: "#161f6d",
    minWidth: "340px",
}

const contrastText = {
    color: "#fff"
}


export default Delivery
