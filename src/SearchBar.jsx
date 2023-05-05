import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import {productData} from './productData';
import {Autocomplete, InputAdornment, TextField} from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';

const nameData = productData.map((product) => {
    return {'label': product.name};
});


export default function SearchBar() {
    return (
        <Box sx={searchContainerStyle}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={nameData}
                sx={autoCompleteStyle}

                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Search"
                        size="small"
                        variant="outlined"
                        InputProps={{
                            // style: {border: '1px solid #F2E8CF', borderRadius: '2px'},
                            startAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />}
            />
            <TuneIcon fontSize="large" sx={{color: "#22222299"}}/>
        </Box>
    );
}

const searchContainerStyle = {
    padding: '0.5em',
    gap: '0.5em',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #22222255',
}

const autoCompleteStyle = {
    backgroundColor: "#fff",
    width: '100%',
    border: '0',
    borderRadius: '2',
}