import React from 'react';
import { Button, Typography } from '@mui/material';
//Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
// Importamos lo que necesitamos para el tipo del selector()
import { RootState} from '../store/index'
//Importamos las acciones que están en el fichero authSlice.ts
import { authActions } from '../store/authSlice';

import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Home(){
   //Almacenamos en la variable userData lo que obtenemos del store usando el hook useSelector
 const userData = useSelector((state: RootState) => state.authenticator)

 const dispatch = useDispatch()
 const navigate = useNavigate()


 const salir = () =>{
    dispatch(authActions.logout())
    && 
    navigate('/')
};

  //Comprobamos por la consola qué obtenemos del store
  console.log("Estoy en Home, Datos cogidos de la store:")
  console.log(userData)
  console.log("isAutenticated: "+userData.isAutenticated)
  console.log("userName: "+userData.userName)
  console.log("userRol: "+userData.userRol)

return <>

<Typography variant="h4">
    Página Home de Israel: 
    Soy el usuario {userData.userName} y 
    tengo el rol de {userData.userRol}
</Typography>
<br/>
<br/>
<Button onClick={salir} variant='contained'>Salir</Button>

    </>
}

export default Home;