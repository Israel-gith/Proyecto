import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Button,Box, Paper,Grid, TextField, Container,
  TableBody,
  TableHead,
  TableContainer,
  TableCell,
  TableRow,
  Table} from '@mui/material';

function Dashboard() {
    
//Creamos el tipo itemtype. Este tipo será un objeto con un id opcional de tipo number
//nombre, marca y tipo de tipo string y el precio de tipo number
interface itemtype {
    id?: number
    nombre: string
    marca: string
    tipo: string
    precio: number
   }
   //Inicializo los valores del item. Aquí no pongo el id porque no lo necesito
   const itemInitialState: itemtype = {
    nombre: '',
    marca: '',
    tipo: '',
    precio: 0
   }
   
   //Cuando declaremos el useState del item en nuestro código:
   const [item, setItem] = useState(itemInitialState)
   const [tableData, setTableData] = useState([]);
   
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setItem({
        ...item,
      [name]: name === 'precio' ? parseFloat(value) : value,
    });
  };

  
async function insertItem() {
    fetch(
      `http://localhost:3030/addItem?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log('Respuesta del fetch: ' + response);
      if (response > 0) {
        alert('Datos guardados con éxito');
        setItem(itemInitialState);
        getData();
      } else {
        alert('Error al guardar los datos');
      }
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    insertItem();
  };

  
  // Función para obtener los datos de la tabla
  async function getData() {
    fetch('http://localhost:3030/getItems')
      .then((response) => response.json())
      .then((response) => {
        console.log('Datos obtenidos:', response.data);
        setTableData(response.data);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }

  
  async function handleDeleteItem(row: itemtype) {
    fetch(`http://localhost:3030/deleteItem?id=${row.id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log('Respuesta de eliminar: ' + response);
        if (response !== 0) {
          alert('Elemento eliminado con éxito');
          getData();
        } else {
          alert('Error al eliminar el elemento');
        }
      });
  }

  // Obtener datos al cargar el componente
  useEffect(() => {
    getData();
  }, []);


  return (
    <Container fixed>  
    <Paper elevation={1} square={false} sx={{marginTop:2, textAlign:'center'}} style={{ padding: '8px' }}>
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">

      <Grid container spacing={1} >
      <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='User'
            name='nombre'
            variant='outlined'
            fullWidth
            value={item.nombre}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Marca'
            name='marca'
            variant='outlined'
            fullWidth
            value={item.marca}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Tipo'
            name='tipo'
            variant='outlined'
            fullWidth
            value={item.tipo}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <TextField
            required
            label='Precio'
            name='precio'
            type='number'
            variant='outlined'
            fullWidth
            value={item.precio}
            onChange={handleChange}
          />
        </Grid>


       </Grid>    

        <Box sx={{justifyContent: 'center', marginTop: 3 }}>
            <Button type="submit" variant="contained" >
            + INSERTAR DATOS
            </Button>
      </Box>
      
      <br />

      <TableContainer>
        <Table aria-label='Datos de la tabla coleccion'>
            <TableHead>
                <TableRow  
                sx={{backgroundColor: '#5f70ce'}}>
                  <TableCell></TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Marca</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Precio</TableCell>
                </TableRow>
            </TableHead>
                
                <TableBody>
                    {tableData.map((row: itemtype) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <Button onClick={() => handleDeleteItem(row)}>
                                    <DeleteForeverIcon />
                                     </Button>
                            </TableCell>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell>{row.marca}</TableCell>
                            <TableCell>{row.tipo}</TableCell>
                            <TableCell>{row.precio}</TableCell>
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

export default Dashboard;