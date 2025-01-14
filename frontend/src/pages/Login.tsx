import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import { Typography,Box, IconButton,Grid, TextField, Button, Paper,Container, Alert, Collapse, Tooltip, Zoom} from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
//Importamos el useDispatch del react-redux
import { useDispatch} from 'react-redux'
//Importamos las acciones que están en el fichero authSlice.ts
import { authActions } from '../store/authSlice';

function Login() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);

    const[data, setData] = useState({
        user:'',
        passw:'',
    });

    const handleChangeUser = (e:any) =>{
        setData({
            ...data,
            user:e.target.value
        });
    };
    const handleChangePassw = (e:any) =>{
        setData({
            ...data,
            passw:e.target.value
        });
    };
    
    async function isVerifiedUser () {
         fetch(`http://localhost:3030/login?user=${data.user}&password=${data.passw}`)
            .then(response => response.json())
            .then (response => {
              console.log('Lo que nos llega de la base de datos: ')
              console.log(response.data)

              if (response.data.length !== 0){
                 //Si hay datos es que el usuario y contraseña son los correctos. Hago el dispatch y el navigate
                 dispatch(authActions.login({
                   name: response.data.nombre, //data.user es el nombre de usuario que ha ingresado el usuario
                   rol: response.data.rol
                 }));
                  navigate('/Home');
                } else{
                   //Si no, realizo la lógica para alertar al usuario con usuario/contraseña son incorrectas
                   setOpen(true);
                }
             })
  
     }
     
    const handleSubmit = (e:any) =>{
      e.preventDefault()
      isVerifiedUser()

      console.log('Usuario: ' + data.user)
      console.log('Contraseña: ' + data.passw)
  };
  
        return (
        <>

<Container fixed>  
        <Paper elevation={5} square={false} sx={{marginTop:5, textAlign:'center'}} style={{ padding: '7px' }}>

            <Typography variant="h3" color="primary">Sistema de acceso</Typography>
            <IconButton>
            <LockIcon/>
            </IconButton>

          <Box component="form" onSubmit={handleSubmit} autoComplete="off">

          <Grid container spacing={1} >

            <Grid item xs={12}>
              <TextField
                required
                label='User'
                name='user'
                variant='outlined'
                fullWidth
                value={data.user}
                onChange={handleChangeUser}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label='Password'
                name='passw'
                variant='outlined'
                type='password'
                fullWidth
                value={data.passw}
                onChange={handleChangePassw}
              />
            </Grid>

           </Grid>    

            <br />

        
          <Tooltip title="Entrar en la aplicación"  arrow
            slots={{
            transition: Zoom,
            }}>
           <Button type="submit" variant='contained' 
           fullWidth
           >ACCEDER</Button>   
           </Tooltip>

           <Collapse in={open}>
            <Alert severity="error" 
            action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
             <CloseIcon fontSize="inherit" />
            </IconButton>}>
            Usuario y/o contraseña incorrectos
            </Alert>
           </Collapse>

           </Box>
        </Paper>
    </Container>
        </>
    );
}

export default Login;