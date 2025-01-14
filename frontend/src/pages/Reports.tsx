import React, { useState } from 'react';
import { Box, Button, Tooltip, Zoom } from '@mui/material';
import Menu from '../components/Menu';
import InformeColeccion from '../components/InformeColeccion';
import InformeDevaluacion from '../components/InformeDevaluacion';

function Reports() {

    // Estado para almacenar los datos obtenidos
    const [datosColeccion, setDatosColeccion] = useState([]);

    const [datosDevaluacion, setDatosDevaluacion] = useState([]);

    // Variable de control
    const [informeColGenerado, setInformeColGenerado] = useState(false);

    const [informeDevGenerado, setInformeDevGenerado] = useState(false);

    // Función para manejar el evento del botón
    const manejarDatosColeccion = async () => {
        fetch('http://localhost:3030/getItems')
        .then((response) => response.json())
        .then((response) => {
          console.log('Datos obtenidos:', response.data);
          setDatosColeccion(response.data); 

          setInformeColGenerado(true); // Cambiar la variable de control
        })
    };

    const manejarDatosDevaluacion = async () => {
        fetch('http://localhost:3030/getDeval')
        .then((response) => response.json())
        .then((response) => {
          console.log('Datos obtenidos:', response.data);
          setDatosDevaluacion(response.data); 

          setInformeDevGenerado(true); // Cambiar la variable de control
        })
    };

    return (
        <>
            <Menu />
            <Box sx={{ justifyContent: 'center', marginTop: 4 }}>
             <Tooltip title="Abrir generador de informes de coleccion"  arrow
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
<br />
            <Box sx={{ justifyContent: 'center', marginTop: 4 }}>
             <Tooltip title="Abrir generador de informes de devaluación"  arrow
              slots={{
                transition: Zoom,
                }}>
                <Button 
                    variant="contained" 
                    onClick={manejarDatosDevaluacion}
                >
                    INFORME DEVALUACION
                </Button>
             </Tooltip>
            </Box>
<br /><br />
            {informeColGenerado && (
                <InformeColeccion datos={datosColeccion} />
            )}
<br /><br />
            {informeDevGenerado && (
                <InformeDevaluacion datos={datosDevaluacion} />
            )}

        </>
    );
}

export default Reports;