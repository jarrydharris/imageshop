import Stack from "@mui/material/Stack";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";

function Categories() {
    return (
        <>
        <Container>
            <Stack direction={"row"} spacing={2}>
                <Box style={boxStyle}/>
                <Box style={boxStyle}/>
                <Box style={boxStyle}/>
                <Box style={boxStyle}/>
            </Stack>
        </Container>
        </>
    )
}

const boxStyle = {
    border: 1,
    borderRadius: 50,
    aspectRatio: 1,
    width: "5em",
    backgroundColor: '#a7c957'
}

export default Categories

// {backgroundColor: '#a7c957'}
// {backgroundColor: '#f6bd60'}
// {backgroundColor: '#ca6702'}
// {backgroundColor: '#bc4749'}