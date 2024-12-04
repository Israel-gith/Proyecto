import React, { useEffect, useState } from 'react';
import {
  Button,Box, Paper,Grid, TextField, Container,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  Table} from '@mui/material';

function AddUser() {
    
interface itemtype {
    id?: number
    nombre: string
    login: string
    password: string
    rol: string
   }
   
   const userInitialState: itemtype = {
    nombre: '',
    login: '',
    password: '',
    rol: '',
   }
   
   //Cuando declaremos el useState del item en nuestro código:
   const [user, setUser] = useState(userInitialState)
   const [tableData, setTableData] = useState([]);
   
  
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser({
        ...user,
      [name]: value,
    });
  };

  
async function insertUser() {
    fetch(
      `http://localhost:3030/insertUser?nombre=${user.nombre}&login=${user.login}&password=${user.password}&rol=${user.rol}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('Respuesta del fetch: ' + response);
      if (response > 0) {
        alert('Datos guardados con éxito');
        setUser(userInitialState);
        getUser();
      } else {
        alert('Error al guardar los datos');
      }
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    insertUser();
  };

  
  // Función para obtener los datos de la tabla
  async function getUser() {
    fetch('http://localhost:3030/getUser')
      .then((response) => response.json())
      .then((response) => {
        console.log('Datos obtenidos:', response.data);
        setTableData(response.data);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }

  // Obtener datos al cargar el componente
  useEffect(() => {
    getUser();
  }, []);


  return (
    <Container fixed>  
    <Paper elevation={1} square={false} sx={{marginTop:2, textAlign:'center'}} style={{ padding: '8px' }}>
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">

      <Grid container spacing={1} >
      <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Nombre'
            name='nombre'
            variant='outlined'
            fullWidth
            value={user.nombre}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Login'
            name='login'
            variant='outlined'
            fullWidth
            value={user.login}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Password'
            name='password'
            variant='outlined'
            fullWidth
            value={user.password}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Rol'
            name='rol'
            variant='outlined'
            fullWidth
            value={user.rol}
            onChange={handleChange}
          />
        </Grid>


       </Grid>    

        <Box sx={{justifyContent: 'center', marginTop: 4 }}>
            <Button type="submit" variant="contained" >
            + INSERTAR USUARIO
            </Button>
      </Box>
      
      <br /><br />

      <TableContainer>
        <Table aria-label='Datos de la tabla coleccion'>
            <TableHead>
                <TableRow  
                sx={{backgroundColor: '#5f70ce'}}>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Marca</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Precio</TableCell>
                </TableRow>
            </TableHead>
                
                <TableBody>
                    {tableData.map((row: itemtype) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell>{row.login}</TableCell>
                            <TableCell>{row.password}</TableCell>
                            <TableCell>{row.rol}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>

        </Table>
      </TableContainer>

       </Box>
    </Paper>
</Container>

  );
}

export default AddUser;