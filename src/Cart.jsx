import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

function Cart(props){
    return(
        <Container sx={containerStyle}>
            <Typography>My Cart</Typography>
            <Typography>Items:</Typography>
            <Typography>Total:</Typography>
        </Container>
    )
}

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    minWidth: "340px",
    maxWidth: "444px",
    padding: "1em",
    height: '100%',

}

export default Cart;