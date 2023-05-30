import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {keyframes} from '@mui/system';
import {Fab} from "@mui/material";

function ImageShopButton(props) {
    const shake = keyframes`
      0% {
        transform: translateX(0);
      }
      92% {
        transform: translateX(0);
      }
      94% {
        transform: translateX(-5px);
      }
      96% {
        transform: translateX(5px);
      }
      98% {
        transform: translateX(-5px);
      }
      100% {
        transform: translateX(0);
      }`;
    const style = {
        position: 'absolute',
        bottom: '20vh',
        right: '1em',
        color: '#fff',
        backgroundColor: '#161f6d',
        animation: `3.5s linear infinite ${shake}`,
    }
    const fab = (
        <Fab variant="extended" sx={style} onClick={props.onClick}>
            <AddAPhotoIcon sx={{mr: 1}}/>
            Click me!
            {/*ImageShop™*/}
        </Fab>
    );
    return fab;
}

export default ImageShopButton;