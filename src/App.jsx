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
import {get, getDatabase, ref, set} from "firebase/database";
import Cart from "./Cart.jsx";
import ImageShopButton from "./ImageShopButton.jsx";

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

    // Get product data from firebase
    const [productData, setProductData] = useState(null);
    const dbRef = ref(database, 'products');
    useEffect(() => {
        get(dbRef, '').then((snapshot) => {
            setProductData(snapshot.val());
        })
    }, [dbRef]);

    // Get cart data from firebase
    const [cartData, setCartData] = useState([]);

    // Add item to cart
    const handleAddItemToCart = (item) => {
        console.log("add item called");
        setCartData([...cartData, item]);
    }

    // Open or close image shop modal
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    // Conditionally render main page
    const [selectedButton, setSelectedButton] = useState("home");

    const handleNavClick = (buttonName) => {
        setSelectedButton(buttonName);
    };


    return (
        <>
            <CssBaseline enableColorScheme/>
            <Container sx={outerContainerStyle} maxWidth="xs" disableGutters>
                <ImageShop
                    open={open}
                    onClick={handleClose}
                    itemData={productData}
                />
                <ImageShopButton onClick={handleOpen}/>
                <NavBar onClick={handleNavClick}/>
                {selectedButton === "home" ?
                    (
                        productData ?
                        <ShopCarousel
                            itemData={productData}
                            handleAddItemToCart={handleAddItemToCart}
                        /> :
                        <LoaderAnimation/>
                     ) : null
                }
                {selectedButton === "cart" ? <Cart itemData={cartData}/> : null}
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
    position: 'relative'
}

