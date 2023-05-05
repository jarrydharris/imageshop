import Typography from '@mui/material/Typography';
import {ImageList, ImageListItem} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";


function ShopCarousel() {
    const itemData = [
        {
            "name": "Strawberry",
            "price": "$17.08",
            "description": "Tortor sit turpis Odio sed fringilla eget sed ut sed facilisis lacus pharetra id amet egestas",
            "category": "et",
            "stock": "77",
            "path": "./public/Strawberry.jpg"
        },
        {
            "name": "Honolulu Cookie",
            "price": "$9.60",
            "description": "Massa varius risus Bibendum id pellentesque risus quis do vivamus euismod vulputate nulla risus",
            "category": "consectetur",
            "stock": "37",
            "path": "./public/Honolulu_Cookie.jpg"
        },
        {
            "name": "Mens Vitamins",
            "price": "$1.15",
            "description": "massa pharetra euismod turpis sit mauris egestas dui ultricies ut nullam in nunc tempor lacus tincidunt vitae nulla viverra egestas scelerisque Tellus lobortis mauris aliquam Lorem felis",
            "category": "risus",
            "stock": "61",
            "path": "./public/Mens_Vitamins.jpg"
        },
        {
            "name": "Mango Chutney",
            "price": "$20.24",
            "description": "bibendum varius elit Tempus mauris varius eget dui nunc labore quisque Duis tincidunt id urna turpis lacus ut consectetur Nunc sapien vulputate pellentesque quam eget viverra scelerisque risus",
            "category": "quis",
            "stock": "2",
            "path": "./public/Mango_Chutney.png"
        },
        {
            "name": "Pasta",
            "price": "$11.50",
            "description": "vitae sapien aliquet lacus massa duis Nunc risus Lorem habitant aliquet",
            "category": "quam",
            "stock": "91",
            "path": "./public/Pasta.jpg"
        },
        {
            "name": "Tabasco Green",
            "price": "$13.50",
            "description": "incididunt magna et facilisis ultrices rutrum et Tempus eiusmod sed nullam dui hendrerit in vel felis id Odio commodo Diam ut sed gravida volutpat viverra",
            "category": "tristique",
            "stock": "78",
            "path": "./public/Tabasco_Green.jpg"
        },
        {
            "name": "Coke Bottle",
            "price": "$5.89",
            "description": "felis aliquet ut rutrum Quisque lacus id Nunc tortor tincidunt risus risus vitae sed accumsan et adipiscing felis integer volutpat in Bibendum vel dolore morbi labore ipsum phasellus",
            "category": "Urna",
            "stock": "87",
            "path": "./public/Coke_Bottle.jpg"
        },
        {
            "name": "Fish Oil",
            "price": "$3.12",
            "description": "tellus condimentum ac nulla mauris eiusmod enim amet Diam scelerisque consectetur nulla urna et massa Quisque sed massa viverra volutpat quisque arcu vel ipsum",
            "category": "vitae",
            "stock": "45",
            "path": "./public/fish_oil.jpg"
        },
        {
            "name": "Belvedere Vodka",
            "price": "$5.39",
            "description": "Tellus odio volutpat faucibus mauris ut massa euismod tortor semper elit Odio Arcu Aenean Lorem enim egestas nunc consectetur Amet dolore elit",
            "category": "dolor",
            "stock": "43",
            "path": "./public/Belvedere_Vodka.jpg"
        },
        {
            "name": "Dawn Soap Og01",
            "price": "$19.38",
            "description": "duis condimentum egestas eiusmod aliquam et purus ut dolore habitant diam Massa id varius faucibus Lorem massa vivamus ultrices quam sollicitudin in rutrum purus feugiat",
            "category": "sollicitudin",
            "stock": "56",
            "path": "./public/Dawn_Soap_og01.jpg"
        },
        {
            "name": "Dove Deoderant",
            "price": "$13.41",
            "description": "semper scelerisque et ultrices nunc vel risus amet pellentesque Tortor nullam tortor",
            "category": "arcu",
            "stock": "60",
            "path": "./public/dove_deoderant.jpg"
        },
        {
            "name": "Dawn Soap Og02",
            "price": "$18.80",
            "description": "Amet viverra eget tincidunt ipsum aliquam massa mauris Tempus sollicitudin Nunc Urna quis faucibus risus massa eget egestas facilisis adipiscing nunc Aenean vulputate tortor sit tortor mauris turpis Quisque",
            "category": "Lorem",
            "stock": "10",
            "path": "./public/Dawn_Soap_og02.jpg"
        },
        {
            "name": "Clorox",
            "price": "$20.44",
            "description": "tortor in ultrices varius ultricies neque tellus Nunc duis Tortor felis Bibendum morbi dolor elit id quam",
            "category": "Vestibulum",
            "stock": "77",
            "path": "./public/Clorox.jpg"
        },
        {
            "name": "Strongbow",
            "price": "$7.61",
            "description": "scelerisque rutrum in Tellus eu fringilla varius pellentesque massa gravida nequeAdipiscing tristique ultricies massa sapien Enim dolor Urna sollicitudin felis mauris",
            "category": "at",
            "stock": "88",
            "path": "./public/Strongbow.jpg"
        },
        {
            "name": "Yan Yan",
            "price": "$12.62",
            "description": "elit do ornare et fringilla risus bibendum phasellus scelerisque tristique pharetra labore convallis nulla risus volutpat quisque at at eiusmod incididunt duis mauris egestas massa lorem dui aliquam A lobortis",
            "category": "ultricies",
            "stock": "11",
            "path": "./public/Yan_Yan.jpg"
        },
        {
            "name": "Carlton Beer",
            "price": "$13.91",
            "description": "scelerisque vel rutrum justo quam at fringilla nunc aliqua vivamus quam tristique habitant tortor aenean tristique aliquet Risus sapien Urna Lorem incididunt massa dignissim varius tortor gravida Nunc mauris",
            "category": "sapien",
            "stock": "57",
            "path": "./public/Carlton_Beer.jpg"
        },
        {
            "name": "White Whine",
            "price": "$13.15",
            "description": "turpis ultricies ut tellus eget ac eu vel Lorem feugiat",
            "category": "Enim",
            "stock": "5",
            "path": "./public/White_Whine.jpg"
        },
        {
            "name": "Peach",
            "price": "$16.78",
            "description": "vitae Aenean enim egestas risus Id sed ut egestas lacinia tristique semper Duis pharetra magna",
            "category": "aenean",
            "stock": "36",
            "path": "./public/Peach.jpg"
        },
        {
            "name": "Coke Can",
            "price": "$4.26",
            "description": "elit nec eget ultricies Massa purus ornare dignissim dui euismod quam ultrices pharetra volutpat felis in ut elit bibendum in sed",
            "category": "vel",
            "stock": "5",
            "path": "./public/Coke_Can.jpg"
        },
        {
            "name": "Hot Cross Buns",
            "price": "$15.44",
            "description": "aliquam ultricies labore Risus fringilla odio mauris tincidunt Urna risus ut turpis sed in rutrum dui Arcu pharetra ipsum felis ac magna neque quisque lobortis ut in nulla",
            "category": "lorem",
            "stock": "19",
            "path": "./public/hot_cross_buns.jpg"
        },
        {
            "name": "Chicken Breast",
            "price": "$1.04",
            "description": "ipsum aliquet tortor Tortor lacinia pellentesque euismod gravida risus ac Bibendum arcu",
            "category": "vitae",
            "stock": "65",
            "path": "./public/chicken_breast.jpg"
        },
        {
            "name": "Shrimp Chips",
            "price": "$5.91",
            "description": "purus Quisque Diam risus elit sed ut nulla massa Amet euismod mauris nequeAdipiscing ultrices aliquam fringilla aenean Vestibulum",
            "category": "Tincidunt",
            "stock": "7",
            "path": "./public/Shrimp_Chips.jpg"
        },
        {
            "name": "Naruto Drink",
            "price": "$14.45",
            "description": "risus ultricies nec duis accumsan vitae Id habitant nisl mauris elit Massa in Lorem Aenean Risus feugiat quam scelerisque phasellus diam amet magna eiusmod scelerisque ultrices eu vivamus",
            "category": "Tincidunt",
            "stock": "29",
            "path": "./public/Naruto_Drink.jpg"
        },
        {
            "name": "Murcury Cider",
            "price": "$17.81",
            "description": "lorem elit eget dolor ultricies dui quis tincidunt tellus vel consectetur lacus neque vitae viverra sed eget feugiat tristique urna Massa adipiscing",
            "category": "sed",
            "stock": "4",
            "path": "./public/Murcury_Cider.jpg"
        },
        {
            "name": "Gnocci",
            "price": "$1.02",
            "description": "justo Amet Lorem eget gravida felis tellus scelerisque accumsan sed Egestas at quis euismod Vestibulum hendrerit at egestas aenean Arcu ultricies varius quis massa quam vitae urna",
            "category": "faucibus",
            "stock": "29",
            "path": "./public/Gnocci.jpg"
        },
        {
            "name": "Juice",
            "price": "$6.41",
            "description": "enim vel vitae risus duis purus pharetra viverra at id volutpat tristique egestas lorem semper euismod risus et enim neque risus nisi lacus fringilla eget nunc Vestibulum mauris",
            "category": "nisi",
            "stock": "56",
            "path": "./public/Juice.jpg"
        },
        {
            "name": "Cruskits",
            "price": "$15.57",
            "description": "lobortis aliquet Nunc fringilla nulla elit lacinia ornare viverra do ultrices purus",
            "category": "tincidunt",
            "stock": "84",
            "path": "./public/Cruskits.png"
        },
        {
            "name": "Paper Towel",
            "price": "$12.12",
            "description": "in pellentesque massa vel tortor tincidunt accumsan urna eu Quisque pharetra",
            "category": "Egestas",
            "stock": "62",
            "path": "./public/paper_towel.jpg"
        },
        {
            "name": "Wine Bottle",
            "price": "$11.19",
            "description": "scelerisque varius gravida vivamus Tempus aenean facilisis faucibus convallis ultricies ornare egestas ac id urna elit enim egestas in tempor risus ut vitae risus quam mauris",
            "category": "dolore",
            "stock": "80",
            "path": "./public/Wine_Bottle.jpg"
        },
        {
            "name": "Cascade Beer",
            "price": "$11.58",
            "description": "labore pellentesque lobortis Bibendum neque rutrum aliqua sed risus nullam risus Tortor neque Egestas convallis aliquet ornare Enim",
            "category": "risus",
            "stock": "38",
            "path": "./public/Cascade_Beer.jpg"
        },
        {
            "name": "Dawn Soap Og04",
            "price": "$12.16",
            "description": "quis bibendum Tortor tellus et tortor at adipiscing elit gravida et Aenean",
            "category": "adipiscing",
            "stock": "17",
            "path": "./public/Dawn_Soap_og04.jpg"
        },
        {
            "name": "Pop Tarts",
            "price": "$15.89",
            "description": "in volutpat nisl Arcu Diam egestas tincidunt lobortis phasellus enim",
            "category": "Urna",
            "stock": "27",
            "path": "./public/Pop_Tarts.jpg"
        },
        {
            "name": "Brocollini",
            "price": "$5.00",
            "description": "et Massa ipsum eget vitae nunc Lorem viverra scelerisque lacus Aenean sed scelerisque incididunt adipiscing Tortor vitae nulla nullam Id ut Egestas Urna urna Vestibulum nulla egestas quis",
            "category": "risus",
            "stock": "28",
            "path": "./public/brocollini.jpg"
        },
        {
            "name": "Lynx",
            "price": "$12.34",
            "description": "ut quisque egestas egestas incididunt ultricies habitant aliquam massa Tempus quis eget id Egestas urna purus faucibus quis risus dolore amet egestas tincidunt elit Vestibulum aliquet egestas odio tincidunt",
            "category": "lacus",
            "stock": "6",
            "path": "./public/Certified_Chick_Magnet.jpg"
        },
        {
            "name": "Stella Artois",
            "price": "$12.70",
            "description": "viverra accumsan semper nec aliqua tellus at nulla lacinia morbi elit Bibendum tincidunt dui eget risus rutrum aliquam sed habitant tortor",
            "category": "in",
            "stock": "66",
            "path": "./public/Stella_Artois.jpg"
        },
        {
            "name": "Diabetes",
            "price": "$16.28",
            "description": "risus eu amet ac quis ut dui quam tortor habitant elit nunc morbi nisl nulla massa risus nequeAdipiscing viverra",
            "category": "lacus",
            "stock": "83",
            "path": "./public/Diabetes.jpg"
        },
        {
            "name": "Tabasco",
            "price": "$7.79",
            "description": "id tincidunt Id nisi risus sed scelerisque duis phasellus mauris pellentesque ultricies egestas adipiscing fringilla neque quis consectetur",
            "category": "neque",
            "stock": "30",
            "path": "./public/Tabasco.jpg"
        },
        {
            "name": "Dog Trainer",
            "price": "$13.98",
            "description": "condimentum scelerisque Egestas nec risus phasellus neque at turpis nisi ut elit duis massa urna nulla sed hendrerit eget egestas dignissim vivamus pulvinar neque incididunt purus sed do",
            "category": "lacinia",
            "stock": "62",
            "path": "./public/Dog_Trainer.jpg"
        },
        {
            "name": "Juice 3pack",
            "price": "$7.40",
            "description": "Tortor nec varius et id vel labore egestas Odio quisque tristique commodo Vestibulum in pellentesque quis lobortis eiusmod amet risus Tellus incididunt condimentum gravida",
            "category": "phasellus",
            "stock": "39",
            "path": "./public/Juice_3pack.jpg"
        },
        {
            "name": "Arnotts Assorted Creams",
            "price": "$4.14",
            "description": "quis A massa viverra rutrum pellentesque Diam at duis volutpat aliquam quam sed at eiusmod lorem faucibus tempor vulputate rutrum in volutpat gravida quam",
            "category": "in",
            "stock": "84",
            "path": "./public/Arnotts_Assorted_Creams.jpg"
        },
        {
            "name": "Cup Noodles",
            "price": "$14.36",
            "description": "eget fringilla Duis ut vivamus Bibendum felis integer dui vel Lorem pharetra sed volutpat in",
            "category": "dolor",
            "stock": "96",
            "path": "./public/cup_noodles.jpg"
        },
        {
            "name": "Dog Treats",
            "price": "$3.97",
            "description": "in varius egestas ultricies rutrum vivamus justo Nunc sed elit quis aliquet habitant id Odio aliquam",
            "category": "lacus",
            "stock": "16",
            "path": "./public/Dog_Treats.jpg"
        },
        {
            "name": "Honolulu Cookies Blue",
            "price": "$14.22",
            "description": "nullam condimentum feugiat neque eu volutpat do nulla quis felis eiusmod quam urna nec amet",
            "category": "in",
            "stock": "75",
            "path": "./public/Honolulu_Cookies_Blue.jpg"
        },
        {
            "name": "Lysol",
            "price": "$6.73",
            "description": "massa duis labore vivamus elit neque purus urna gravida viverra risus nunc dignissim in pharetra sed vitae rutrum",
            "category": "at",
            "stock": "81",
            "path": "./public/Lysol.jpg"
        },
        {
            "name": "Sou Sauce",
            "price": "$10.58",
            "description": "scelerisque egestas tortor ultricies habitant massa tincidunt Id scelerisque sed risus scelerisque sed facilisis tristique varius id accumsan nunc pulvinar lorem Tellus diam eget dui duis aliquet sed vel magna",
            "category": "accumsan",
            "stock": "4",
            "path": "./public/Sou_Sauce.jpg"
        },
        {
            "name": "Shoe Repair",
            "price": "$15.74",
            "description": "varius feugiat scelerisque massa Tellus tempor in nulla sed do mauris risus sapien habitant Urna Massa faucibus ac et nisi tincidunt neque Tempus aliquam facilisis pellentesque quis dui risus",
            "category": "lobortis",
            "stock": "14",
            "path": "./public/shoe_repair.jpg"
        },
        {
            "name": "Stax",
            "price": "$16.25",
            "description": "egestas fringilla tristique pellentesque at habitant massa semper Bibendum egestas scelerisque Massa commodo eget ultricies ultricies tempor",
            "category": "A",
            "stock": "52",
            "path": "./public/Stax.jpg"
        },
        {
            "name": "Parmolive Hand Soap",
            "price": "$15.14",
            "description": "Enim Lorem Arcu accumsan rutrum aliquet Risus enim Aenean amet",
            "category": "tincidunt",
            "stock": "46",
            "path": "./public/Parmolive_Hand_Soap.png"
        },
        {
            "name": "Bottled Water",
            "price": "$9.44",
            "description": "ipsum eget sed lacinia risus nullam volutpat tellus elit Tellus duis",
            "category": "Id",
            "stock": "81",
            "path": "./public/Bottled_Water.jpg"
        },
        {
            "name": "Dawn Soap Og03",
            "price": "$11.77",
            "description": "odio Tempus neque Tincidunt vulputate Odio mauris dolore incididunt tortor viverra enim tellus justo ipsum gravida eget viverra Tortor accumsan Bibendum rutrum lorem tellus pulvinar",
            "category": "pellentesque",
            "stock": "45",
            "path": "./public/Dawn_Soap_og03.jpg"
        },
        {
            "name": "Beer",
            "price": "$8.52",
            "description": "tortor ultricies Amet risus volutpat sed labore purus sed aenean tortor viverra eiusmod A nullam ut massa Duis dui tellus accumsan quisque rutrum Massa nequeAdipiscing egestas Tempus do felis tempor",
            "category": "purus",
            "stock": "24",
            "path": "./public/Shit_Beer.jpg"
        }
    ]
    return (
        <ImageList sx={containerStyle} cols={2}>
            {itemData.map((item) => (
                <ImageListItem sx={itemStyle} key={item.path}>
                    <img
                        style={imageStyle}
                        src={`${'./src/' + item.path}?w=248&fit=crop&auto=format`}
                        srcSet={`${'./src/' + item.path}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <Box sx={underImageStyle}>
                        <Box sx={textStyle}>
                            <Typography variant="h1" fontWeight="" fontSize="16px">{item.name}</Typography>
                            <Typography sx={attentionStyle} variant="h2" fontWeight="bold"
                                        fontSize="14px">{item.price}</Typography>
                        </Box>
                        <IconButton aria-label="add-to-cart" size="small">
                            <AddCircleIcon sx={{...attentionStyle, }}/>
                        </IconButton>
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




