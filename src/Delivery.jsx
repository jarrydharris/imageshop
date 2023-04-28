import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';


function Delivery() {
    return (
        <>
            <Box>
                <Typography variant="subtitle1" component="h6">Delivery address</Typography>
            </Box>
            <Stack direction="row">
                <Box>
                    <Typography variant="h6" component="h6">Rhodes, Sydney</Typography>
                </Box>
                <Box style={expandBox}>
                    <ExpandMoreIcon/>
                </Box>
            </Stack>
        </>
    )
}

export default Delivery


const expandBox = {
    marginTop: "5px",
}