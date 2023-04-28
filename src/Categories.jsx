import Stack from "@mui/material/Stack";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCarrot, faAppleWhole, faBacon, faCow } from '@fortawesome/free-solid-svg-icons'
function Categories() {
    return (
        <>
            <Container style={containerStyle}>
                <Stack direction={"row"} spacing={2} >
                    <Category style={boxStyle3} label={"Fruit"} icon={faAppleWhole}/>
                    <Category style={boxStyle1} label={"Vegetables"} icon={faCarrot}/>
                    <Category style={boxStyle4} label={"Meat"} icon={faBacon}/>
                    <Category style={boxStyle2} label={"Dairy"} icon={faCow}/>
                </Stack>
            </Container>
        </>
    )
}

function Category({style, label, icon}) {
    return (
        <>
            <Box display='grid' justifyItems='center'>
            <Box style={style} display='grid' justifyItems='center' alignItems='center'>
                <FontAwesomeIcon icon={icon} size="2xl" color="#edede9d0"/>
            </Box>
            <Typography>{label}</Typography>
            </Box>
        </>
    )
}

const boxStyle1 = {
    border: 1,
    borderRadius: 50,
    aspectRatio: 1,
    width: "5em",
    backgroundColor: '#a7c957'
}
const boxStyle2 = {
    border: 1,
    borderRadius: 50,
    aspectRatio: 1,
    width: "5em",
    backgroundColor: '#f6bd60'
}
const boxStyle3 = {
    border: 1,
    borderRadius: 50,
    aspectRatio: 1,
    width: "5em",
    backgroundColor: '#ca6702'
}
const boxStyle4 = {
    border: 1,
    borderRadius: 50,
    aspectRatio: 1,
    width: "5em",
    backgroundColor: '#bc4749'
}

const containerStyle = {
    marginTop: "0.5em",
    marginBottom: "0.5em",
    display: "flex",
    justifyContent: "center"
}

export default Categories
