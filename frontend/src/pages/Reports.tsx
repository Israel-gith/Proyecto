import React, { useState } from 'react';
import { Box, Button, Tooltip, Zoom } from '@mui/material';
import Menu from '../components/Menu';
import InformeColeccion from '../components/InformeColeccion';

function Reports() {

    // Estado para almacenar los datos obtenidos
    const [datosColeccion, setDatosColeccion] = useState([]);

    // Variable de control
    const [informeGenerado, setInformeGenerado] = useState(false);

    // Función para manejar el evento del botón
    const manejarDatosColeccion = async () => {
        fetch('http://localhost:3030/getItems')
        .then((response) => response.json())
        .then((response) => {
          console.log('Datos obtenidos:', response.data);
          setDatosColeccion(response.data); 

          setInformeGenerado(true); // Cambiar la variable de control
        })
    };

    return (
        <>
            <Menu />
            <Box sx={{ justifyContent: 'center', marginTop: 4 }}>
             <Tooltip title="Abrir generador de informes"  arrow
              slots={{
                transition: Zoom,
                }}>
                <Button 
                    variant="contained" 
                    onClick={manejarDatosColeccion}
                >
                    INFORME COLECCION
                </Button>
             </Tooltip>
            </Box>
<br /><br />
            {informeGenerado && (
                <InformeColeccion datos={datosColeccion} />
            )}

        </>
    );
}

export default Reports;