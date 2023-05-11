import {Button, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import weaviate from "weaviate-client";
import {useState} from "react";

const client = weaviate.client({
    scheme: 'https',
    host: 'phoneapp.jarrydharris.org',
    headers: ["Content-Type", "application/json"],
});


function ImageShop(props) {
    const [searchResult, setSearchResult] = useState(null);

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

                    setSearchResult("data:image/jpeg;base64," + result);
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
                        <>
                            <img id="showImage" height="200px" width="200px"></img>
                            <Typography>Take a photo or select an image from your gallery</Typography>
                            <input
                                id="imageInput"
                                type="file"
                                name="picture"
                                accept="image/*"
                                capture="environment"
                                onChange={handleInputChange}
                            />
                        </> :
                        <>
                            <Typography>This is what we found!</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <img src={searchResult} id="showImage" height="300px" width="300px"></img>
                                <Typography>Name</Typography>
                                <Typography>$0.00</Typography>
                                <Typography>Description</Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '0.5em'
                            }}>
                                <Button variant="contained" sx={{}} onClick={addToCart}>Add to cart</Button>
                                <Button variant="contained" sx={{}} onClick={clearImage}>New search</Button>
                            </Box>
                        </>
                    }
                </Box>
                <Button variant="contained" sx={{}} onClick={clearImageAndClose}>Close</Button>
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
    maxHeight: "831px",
    minHeight: "540px",
    height:"93vh",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: "#eee",
}


export default ImageShop