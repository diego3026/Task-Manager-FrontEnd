import { Box, CircularProgress } from "@mui/material";
import './Progress.css'

const Progress = () => {
    return (
        <div className="progress">
            <Box sx={{ display: 'flex', width:'100%', height:'100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress sx={{color: 'var(--white)'}} />
            </Box>
        </div>
    )
}

export default Progress;