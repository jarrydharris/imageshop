import {Button, Modal} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function ImageShop(props) {
    return (
        <>
            <Modal open={props.open}>
                <Box sx={outerContainerStyle}>

                    <Typography variant="h5">
                        Welcome to ImageShop!
                    </Typography>
                    <ImageSelector></ImageSelector>
                    <Button variant="contained" sx={{}} onClick={props.onClick}>Close</Button>


                </Box>
            </Modal>
        </>
    )
}


const outerContainerStyle = {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: "90vh",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%)',
    backgroundColor: "#eee",
}

function ImageSelector(pickImage) {
    return (
        <>
            <Box onClick={pickImage}>
                <Typography>Select an image from your gallery</Typography>
                <Button variant="contained" onClick={{pickImage}}>Select an image from your gallery</Button>
            </Box>
        </>
    )
}

export default ImageShop