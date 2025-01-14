import React from 'react';
//Importamos el useSelector del react-redux
import { useSelector } from 'react-redux'
// Importamos lo que necesitamos para el tipo del selector()
import { RootState} from '../store/index'

import Menu from '../components/Menu';
import Dashboard  from '../components/Dashboard';


function Home(){
   //Almacenamos en la variable userData lo que obtenemos del store usando el hook useSelector
 const userData = useSelector((state: RootState) => state.authenticator)

  //Comprobamos por la consola qué obtenemos del store
  console.log("Estoy en Home, Datos cogidos de la store:")
  console.log(userData)
  console.log("isAutenticated: "+userData.isAutenticated)
  console.log("userName: "+userData.userName)
  console.log("userRol: "+userData.userRol)

return <>
<Menu/>
<Dashboard/>
    </>
}

export default Home;