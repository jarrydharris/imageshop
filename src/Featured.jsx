import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
///*Photo by <a href="https://unsplash.com/@joshrh19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joshua Rawson-Harris</a> on <a href="https://unsplash.com/photos/YNaSz-E7Qss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/

function Featured() {
    return (
        <>
            <Container style={containerStyle}>
                <Box style={boxStyle}>
                    <img width="100%" src="./src/assets/joshua-rawson-harris-YNaSz-E7Qss-unsplash.jpg" alt={"Joshua Rawson-Harris"}/>

                    <Typography
                        position='absolute'
                        color="#fff"
                        variant={"h4"}
                    >

                    </Typography>
                </Box>
            </Container>
        </>
    )
}

const boxStyle = {
    border: 1,
    borderRadius: 4,
    height: "100%",
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
}

const containerStyle = {
    padding: 0,
    display: 'flex',
    justifyItems: 'stretch',
    alignItems: 'flex-grow',
    height: '15vh',
}

export default Featured