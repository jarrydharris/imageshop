import Typography from '@mui/material/Typography';
import {ImageList, ImageListItem} from '@mui/material';
import Box from "@mui/material/Box";
import AddToCartButton from "./AddToCartButton.jsx";


function ShopCarousel(props) {

    return (
        <ImageList sx={containerStyle} cols={2}>
            {Object.entries(props.itemData).map(([key, value]) => (
                <ImageListItem sx={itemStyle} key={key}>
                    <img
                        style={imageStyle}
                        srcSet={`data:image/jpg;base64,${value.image}`}
                        alt={value.name}
                        loading="lazy"
                    />
                    <Box sx={underImageStyle}>
                        <Box sx={textStyle}>
                            <Typography variant="h1" fontWeight="" fontSize="16px">{value.name}</Typography>
                            <Typography sx={attentionStyle} variant="h2" fontWeight="bold"
                                        fontSize="14px">{value.price}</Typography>
                        </Box>
                        <AddToCartButton onClick={props.handleAddItemToCart} itemData={value}/>
                    </Box>
                </ImageListItem>
            ))}
        </ImageList>
    )
}

const containerStyle = {
    m: 0,
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: '1px',
    minWidth: "340px",
    maxWidth: "444px",
    paddingLeft: "1em",
    paddingRight: "1em",
    height: '100%',

}

const imageStyle = {
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
}

const itemStyle = {
    transform: 'translateY(10px)',
    border: '1px solid #ccc',
    overflow: 'contain',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    paddingBottom: '0.5em',
}

const textStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: '0.25em',
}

const underImageStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
}

const attentionStyle = {
    color: '#00abe1',
}
export default ShopCarousel




