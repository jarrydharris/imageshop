import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAppleWhole, faBacon, faCarrot, faCow} from '@fortawesome/free-solid-svg-icons'

function Categories() {
    return (
        <>
            <Container style={containerStyle}>
                <Category style={{...fruitStyle, ...iconContainerStyle}} label={"Fruit"} icon={faAppleWhole}/>
                <Category style={{...vegeStyle, ...iconContainerStyle}} label={"Vegetables"} icon={faCarrot}/>
                <Category style={{...meatStyle, ...iconContainerStyle}} label={"Meat"} icon={faBacon}/>
                <Category style={{...dairyStyle, ...iconContainerStyle}} label={"Dairy"} icon={faCow}/>
            </Container>
        </>
    )
}

function Category({style, label, icon}) {
    return (
        <>
            <Box sx={categoryContainerStyle}>
                <Box style={style}>
                    <FontAwesomeIcon icon={icon} size="sml" color="#edede9d0"/>
                </Box>
                <Typography>{label}</Typography>
            </Box>
        </>
    )
}

const containerStyle = {
    m:0,
    paddingLeft:'0.5em',
    paddingRight:'0.5em',
    display: "flex",
    justifyContent: "space-between",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
    backgroundColor: "#F2E8CF",
    paddingBottom: '0.5em',
}

const categoryContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: '0.25em',
    color: "#33333388",
    border: "1px solid #22222255",
    borderRadius: 1,
    padding: "0.5em",
    cursor: 'pointer',
}

const iconContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: 50,
    aspectRatio: 1,
    width: "2em",
}


const vegeStyle = {
    backgroundColor: '#a7c957',
}
const dairyStyle = {
    backgroundColor: '#f6bd60',
}
const fruitStyle = {
    backgroundColor: '#ca6702',
}
const meatStyle = {
    backgroundColor: '#bc4749',
}


export default Categories
