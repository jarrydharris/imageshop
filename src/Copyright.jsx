import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="#333" align="center" fontSize="7px">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/"> {/*# TODO: Update this link*/}
                Jarryd Harris
            </Link>{' '}
        {new Date().getFullYear()}
        </Typography>
    );
}