import {Button, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function handleInputChange(event) {
    const newValue = event.target.files;
    const image = document.querySelector('#showImage');
    image.src = URL.createObjectURL(newValue[0]);
    const reader = new FileReader();
    reader.readAsDataURL(newValue[0]);
    console.log("onload about to be called");
    reader.onload = () => {
        console.log("onload called");
        const base64String = reader.result;
        console.log(base64String);
    };
}

function ImageShop(props) {

    return (
        <>
            <Modal open={props.open}>
                <Box sx={outerContainerStyle}>

                    <Typography variant="h5">
                        Welcome to ImageShop!
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img id="showImage" height="300px" width="300px"></img>
                        <Typography>Take a photo or select an image from your gallery</Typography>
                        <input
                            id="imageInput"
                            type="file"
                            name="picture"
                            accept="image/*"
                            capture="environment"
                            onChange={handleInputChange}
                        >
                        </input>
                    </Box>
                    <Button variant="contained" sx={{}} onClick={props.onClick}>Close</Button>
                </Box>
            </Modal>
        </>
    )
}


const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: "90vh",
    maxHeight: "800px",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: "#eee",
}


export default ImageShop