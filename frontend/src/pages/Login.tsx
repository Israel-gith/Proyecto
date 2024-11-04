import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import { Typography,Box, IconButton,Grid, TextField, Button, Paper,Container, Alert, Collapse} from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

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

    const validuser = 'israel'
    const validpassw = '1234'


    const handleSubmit = (e:any) =>{
        e.preventDefault()
        {data.user==validuser && data.passw==validpassw ?
            navigate('/Hme') : setOpen(true);
        };
        console.log('Usuario: ' + data.user)
        console.log('Contraseña: ' + data.passw)
    };

    const [open, setOpen] = useState(false);

        return (
        <>

<Container fixed>
         
        <Paper elevation={5} square={false} sx={{marginTop:5, textAlign:'center'}} >

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

           <Button type="submit" variant='contained' 
           fullWidth
    
          >ACCEDER</Button>   

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