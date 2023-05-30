import {Button, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import weaviate from "weaviate-client";
import {useState} from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera.js";
import AddCircleIcon from "@mui/icons-material/AddCircle.js";
import IconButton from "@mui/material/IconButton";

const client = weaviate.client({
    scheme: 'https',
    host: 'phoneapp.jarrydharris.org',
    headers: ["Content-Type", "application/json"],
});

function UploadButton(props) {
    return (
        <>
            <img id="showImage" style={{display: 'none'}} height="200px" width="200px"></img>
            <Typography>Our AI will help you find what you are after!</Typography>
            <div id="fileUpload" style={fileUploadStyle}>
                <PhotoCameraIcon/>
                <label htmlFor="imageInput" style={{cursor: 'pointer'}}>Take a Photo</label>
                <input
                    id="imageInput"
                    type="file"
                    name="picture"
                    accept="image/*"
                    capture="environment"
                    onChange={props.onChange}
                    style={photoButtonStyle}
                />
            </div>
        </>
    )
}

function SearchResults(props) {
    return (
        <>
            <Typography>This is what we found!</Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: `1em`
            }}>
                <img src={props.searchResult} id="showImage" height="300px" width="300px"></img>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Typography variant="h1" fontWeight="" fontSize="16px">{props.name}</Typography>
                    <Typography sx={{color: '#00abe1'}} variant="h2" fontWeight="bold"
                                fontSize="14px">{props.price}</Typography>
                                        </Box>

                    <IconButton aria-label="add-to-cart" size="small">
                        <AddCircleIcon sx={{color: '#00abe1'}}/>
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '0.5em'
            }}>
                <Button variant="contained" sx={modelCloseStyle} onClick={props.clearImage}>New search</Button>
            </Box>
        </>
    )
}


function ImageShop(props) {
    const [searchResult, setSearchResult] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const itemData = props.itemData;

    function handleInputChange(e) {
        const newValue = e.target.files;
        console.log(newValue);
        const image = document.querySelector('#showImage');
        image.src = URL.createObjectURL(newValue[0]);
        const reader = new FileReader();
        reader.readAsDataURL(newValue[0]);
        let result = null;
        reader.onload = () => {
            const base64String = reader.result.substring(23);
            client.graphql
                .get()
                .withClassName('Images')
                .withFields(['labelName', 'image'])
                .withNearImage({image: base64String})
                .withLimit(3)
                .do()
                .then((res) => {
                    result = res.data.Get.Images[0].image;
                    Object.entries(itemData).map(([key, item]) => {

                        const resName = res.data.Get.Images[0].labelName.toLowerCase().split("_").slice(0, 2).join(" ");

                        if (item.name.toLowerCase() === resName) {
                            setName(item.name);
                            setPrice(item.price);
                            setSearchResult("data:image/jpeg;base64," + item.image);
                        }

                    })
                    image.src = searchResult;
                })
                .catch(err => {
                    console.error(err)
                });
        };
    }

    const clearImageAndClose = () => {
        const image = document.querySelector('#showImage');
        image.src = "";
        setSearchResult(null);
        props.onClick();
    }

    const clearImage = () => {
        const image = document.querySelector('#showImage');
        image.src = "";
        setSearchResult(null);
    }

    const addToCart = () => {
    }


    return (
        <Modal open={props.open} onClose={clearImageAndClose}>
            <Box sx={outerContainerStyle}>
                <Typography variant="h5">
                    Welcome to ImageShop!
                </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {(searchResult === null) ?
                        <UploadButton onChange={handleInputChange}/> :
                        <SearchResults
                            searchResult={searchResult}
                            addToCart={addToCart}
                            clearImage={clearImage}
                            name={name}
                            price={price}
                        />
                    }
                </Box>
                <Button variant="contained" sx={modelCloseStyle} onClick={clearImageAndClose}>Close</Button>
            </Box>
        </Modal>
    )
}


const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '5vh',
    marginBottom: '10vh',
    maxHeight: "831px",
    minHeight: "500px",
    height: "90vh",
    minWidth: "340px",
    width: "90vw",
    maxWidth: "444px",
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: "#fff",
}

const photoButtonStyle = {
    display: 'none',
}

const fileUploadStyle = {
    display: 'flex',
    borderRadius: '5px',
    padding: '0.5em',
    backgroundColor: '#00abe1',
    color: "#fff",
    fontWeight: 'bold',
    cursor: 'pointer',
}

const modelCloseStyle = {
    backgroundColor: '#00abe1',
    color: "#fff",
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: 'none',
}


export default ImageShop