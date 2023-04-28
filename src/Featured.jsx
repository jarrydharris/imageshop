import Stack from "@mui/material/Stack";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Featured() {
    return (
        <>
        <Container>
            <Stack direction={"row"} spacing={2}>
                <Box style={boxStyle}>
                    <Typography variant={"h6"}>Latest Special</Typography>
                </Box>
            </Stack>
        </Container>
        </>
    )
}

const boxStyle = {
    border: 1,
    borderRadius: 2,
    height: '20vh',
    width: "100%",
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Featured