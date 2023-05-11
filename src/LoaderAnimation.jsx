import {CircularProgress, Container} from "@mui/material";
import Typography from "@mui/material/Typography";


function LoaderAnimation() {
    return (
        <Container sx={loadingContainerStyle} >
            <CircularProgress />
            <Typography
                variant="h1"
                fontWeight="bold"
                fontSize="24px"
                color="#161f6d"
            >Be right with you!</Typography>
        </Container>
    )
}

export default LoaderAnimation;

const loadingContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "1em",
    minHeight: "600px",
    height: "100vh",
    maxHeight: "900px",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
}

