import CssBaseline from '@mui/material/CssBaseline';
import {Container} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from "./NavBar.jsx";
import ShopCarousel from "./ShopCarousel.jsx";
import Delivery from "./Delivery.jsx";
import ImageShop from "./ImageShop.jsx";
import {useState} from "react";


function App() {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <CssBaseline enableColorScheme/>
            <Container sx={outerContainerStyle} maxWidth="xs" disableGutters>
                <ImageShop open={open} onClick={handleClose}/>
                <Delivery/>
                <ShopCarousel/>
                <NavBar onClick={handleOpen}/>
            </Container>
        </>
    )
}

export default App

const outerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    borderRadius: 2,
    backgroundColor: "#fff",
    minHeight: "600px",
    height: "100vh",
    maxHeight: "900px",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    overflow: 'hidden',
}