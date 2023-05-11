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
import LoaderAnimation from "./LoaderAnimation.jsx";
import {useEffect, useState} from "react";

import {initializeApp} from "firebase/app";
import {get, getDatabase, ref} from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBE_mRxYsieNoTHWDr86rJxAViK7BXDyYA",
    authDomain: "phone-camera-app-a34e8.firebaseapp.com",
    databaseURL: "https://phone-camera-app-a34e8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "phone-camera-app-a34e8",
    storageBucket: "phone-camera-app-a34e8.appspot.com",
    messagingSenderId: "204972217957",
    appId: "1:204972217957:web:54eb46b60a1031b1cad88c",
    measurementId: "G-7B11115KHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

function App() {

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const [itemData, setItemData] = useState(null);
    const dbRef = ref(database);
    useEffect(() => {
        get(dbRef, '').then((snapshot) => {
            setItemData(snapshot.val().products);
        })
    }, [dbRef]);

    return (
        <>
            <CssBaseline enableColorScheme/>
            <Container sx={outerContainerStyle} maxWidth="xs" disableGutters>
                <ImageShop open={open} onClick={handleClose}/>
                <NavBar onClick={handleOpen}/>
                {itemData ?
                    <ShopCarousel itemData={itemData}/> :
                    <LoaderAnimation/>
                }
                <Delivery/>
            </Container>
        </>
    )
}

export default App

const outerContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#fff",
    minHeight: "600px",
    height: "100vh",
    maxHeight: "900px",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    overflow: 'hidden',
}

