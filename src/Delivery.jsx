import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';


function Delivery() {
    return (
        <>
            <Typography variant="subtitle1" component="h6">Delivery address</Typography>
            <Stack direction="row">
                <Typography variant="h6" component="h6">Rhodes, Sydney</Typography>
                <Box style={{marginTop: "5px"}}>
                    <ExpandMoreIcon/>
                </Box>
            </Stack>
        </>
    )
}

export default Delivery
