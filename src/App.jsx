import CssBaseline from '@mui/material/CssBaseline';
import {Box, Container, ThemeProvider} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Copyright from "./Copyright.jsx";
import NavBar from "./NavBar.jsx";
import ShopCarousel from "./ShopCarousel.jsx";
import Grid from '@mui/material/Unstable_Grid2';
import Delivery from "./Delivery.jsx";
import SearchBar from "./SearchBar.jsx";
import Notifications from "./Notifications.jsx";
import Categories from "./Categories.jsx";
import Featured from "./Featured.jsx";
import {theme} from "./theme.jsx"

function App() {
    return (
        <>
            <CssBaseline enableColorScheme/>
            <ThemeProvider theme={theme}>
                <Container sx={containerStyle} maxWidth="xs" >
                    <Grid container spacing={1} display="flex" alignItems="center" height="100%">
                        <Grid xs={7} >
                            <Box sx={boxStyle}><Delivery/></Box>
                        </Grid>
                        <Grid xs={4} xsOffset={1} >
                            <Box sx={boxStyle}><Notifications/></Box>
                        </Grid>
                        <Grid xs={12} >
                            <Box sx={boxStyle} ><SearchBar/></Box>
                        </Grid>
                        <Grid xs={12} >
                            <Box sx={boxStyle}><Categories/></Box>
                        </Grid>
                        <Grid xs={12} >
                            <Box sx={boxStyle}><Featured/></Box>
                        </Grid>
                        <Grid xs={12} >
                            <Box sx={boxStyle}><ShopCarousel/></Box>
                        </Grid>
                        <Grid xs={12} >
                            <Box sx={boxStyle}><NavBar/></Box>
                        </Grid>
                    </Grid>
                    <Copyright></Copyright>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default App

const boxStyle = {
    borderRadius: 2,
    padding: "0.5em",
}

const containerStyle = {
    padding: "0.5em",
    borderRadius: 2,
    backgroundColor: "#edede9",
    maxHeight: "800px",
    height: "100vh",
    minWidth: "340px",
    paddingBottom: "0.2em"
}