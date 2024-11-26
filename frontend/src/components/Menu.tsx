import { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState} from '../store/index'
import { authActions } from '../store/authSlice';
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {InsertEmoticon as InsertEmoticonIcon,Adb as AdbIcon, Person as PersonIcon, AdminPanelSettings as AdminPanelSettingsIcon, Logout as LogoutIcon, Help as HelpIcon, Feed as ReportIcon, Menu as MenuIcon, Home as HomeIcon } from '@mui/icons-material';

function Menu() {

 const userData = useSelector((state: RootState) => state.authenticator)
 const dispatch = useDispatch()
 const navigate = useNavigate()

const isLoggedin = userData.isAutenticated
useEffect(() => {
if (!isLoggedin) {
 navigate('/')
 }
 }, [isLoggedin, navigate])

 const salir = () =>{
  dispatch(authActions.logout())
  && 
  navigate('/') 
};

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(open && {
            width: `calc(100% - 240px)`,
            marginLeft: '240px',
            transition: theme.transitions.create(['margin', 'width'], {
              easing: theme.transitions.easing.easeOut,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),backgroundColor: '#5f70ce'
        }}
      >
        <Toolbar>
         
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 2,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>


          <Typography variant="h6" noWrap sx={{ flexGrow: 1, textAlign: 'center' }}>
            {userData.userName}
          </Typography>

        
        {userData.userRol == "admin" && (
            <IconButton color="inherit" edge="end">
              <AdminPanelSettingsIcon />
            </IconButton>
          )}
          {userData.userRol == "user" && (
            <IconButton color="inherit" edge="end">
              <AdbIcon />
            </IconButton>
          )}
          {userData.userRol == "invitado" && (
            <IconButton color="inherit" edge="end">
              <InsertEmoticonIcon />
            </IconButton>
          )}

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItem>
        </Link>

        {userData.userRol == "admin" && (
          <Link to="/gestionUsers" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Gestión Usuario" />
          </ListItem>
        </Link>
          )}
        
        {userData.userRol !== "invitado" && (
         <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
         <ListItem >
           <ListItemIcon>
             <ReportIcon />
           </ListItemIcon>
           <ListItemText primary="Informes" />
         </ListItem>
       </Link>
          )}

        
        <Link to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem >
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Ayuda" />
          </ListItem>
        </Link>

        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem onClick={salir}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Salir" />
          </ListItem>
        </Link>
      </Drawer>

      <br /><br />
    </Box>
  );
}

export default Menu;