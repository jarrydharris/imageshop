import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/"> {/*# TODO: Update this link*/}
                JarrydHarris Industries
            </Link>{' '}
        {new Date().getFullYear()}
        </Typography>
    );
}