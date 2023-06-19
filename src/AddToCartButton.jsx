import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddToCartButton(props) {

    const handleClick = () => {
        props.onClick(props.itemData)
    }

    return (
        <Box onClick={handleClick}>
            <IconButton aria-label="add-to-cart" size="small">
                <AddCircleIcon sx={{...attentionStyle,}}/>
            </IconButton>
        </Box>
    )
}

const attentionStyle = {
    color: '#00abe1',
}

export default AddToCartButton;