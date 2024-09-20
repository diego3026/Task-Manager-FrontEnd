import TextField from "@mui/material/TextField";
import './HeaderPrincipal.css'
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider";

const PrincipalHeader = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const auth = useAuth()

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        auth.logoutUser();
    };

    return (
        <div className="navbar__principal">
            <div className="logo">
                <h1 className="logo__text young-serif-regular">Easy</h1>
                <h1 className="logo__text-color young-serif-regular">Task</h1>
            </div>
            <div className="search">
                <TextField sx={{width:"100%"}} id="outlined-search" label="Buscar" type="search" />
            </div>
            <div className="user">
                <h3 className="user__username">{auth.user.name}</h3>
                <div className="user__menu">
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 1 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ background: '#232360', width: 32, height: 32 }}>D</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default PrincipalHeader;