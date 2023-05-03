import CssBaseline from '@mui/material/CssBaseline';
import {Box, Container} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from "./NavBar.jsx";
import ShopCarousel from "./ShopCarousel.jsx";
import Grid from '@mui/material/Unstable_Grid2';
import Delivery from "./Delivery.jsx";
import SearchBar from "./SearchBar.jsx";
import Categories from "./Categories.jsx";
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
                <ImageShop open={open} onClick={handleClose}>
                </ImageShop>
                <Grid container spacing={0} style={outerGridStyle}>
                    <Grid xs={12} sx={
                        {paddingLeft: '1em', paddingTop: '1em'}
                    }>
                        <Delivery/>
                    </Grid>
                    <Grid xs={12} sx={
                        {paddingLeft: '1em', paddingRight: '1em'}
                    }>
                        <SearchBar/>
                    </Grid>
                    <Grid xs={12}>
                        <Categories/>
                    </Grid>
                    <Grid xs={12}>
                        <Box sx={{
                            ...boxStyle,
                            backgroundColor: "#fff",
                            width: "100%",
                            maxWidth: "444px",
                            height: "30vh"
                        }}><ShopCarousel/></Box>
                    </Grid>
                </Grid>
                <Box
                    sx={
                        {
                            ...boxStyle,
                            alignSelf: "flex-end",
                            minWidth: "340px",
                            width: "100vw",
                            maxWidth: "444px",
                            boxShadow: 4,
                            backgroundColor: "#eee"

                        }}><NavBar onClick={handleOpen}/></Box>

            </Container>
        </>
    )
}

export default App

const boxStyle = {
    backgroundColor: "#edede9",
}

const outerGridStyle = {
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
}

const outerContainerStyle = {
    display: "grid",
    borderRadius: 2,
    backgroundColor: "#edede9",
    minHeight: "600px",
    height: "100vh",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    overflow: 'hidden'
}