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
            <Box style={categoryContainerStyle}>
                <Box style={style}>
                    <FontAwesomeIcon icon={icon} size="2xl" color="#edede9d0"/>
                </Box>
                <Typography>{label}</Typography>
            </Box>
        </>
    )
}

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    minWidth: "340px",
    width: "100vw",
    maxWidth: "444px",
}

const categoryContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    height: '110px',
}

const iconContainerStyle = {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    border: 1,
    borderRadius: 50,
    aspectRatio: 1,
    width: "5em",
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
