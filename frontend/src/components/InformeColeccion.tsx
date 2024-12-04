import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

interface IColeccion {
  nombre: string;
  marca: string;
  tipo: string;
  precio: number;
}

function EjemploInforme({datos}){

    const col: Array<Column<IColeccion>> = [
    { title: "Nombre", field: "nombre", filtering: false},
    { title: "Marca", field: "marca" },
    { title: "Tipo", field: "tipo" },
    { title: "Precio", field: "precio", type: "numeric", filtering: false }
  ];

 const tableData: Array<IColeccion> = datos;

return (
    <MaterialTable
    columns={col} data={tableData}
    renderSummaryRow={({ column, data }) =>
      column.field === "precio"
        ? {
            value: data.reduce((agg, row) => agg + row.precio, 0),
            style: { background: "#5f70ce" },
          }
        : undefined
    }

    title='Coleccion'
    options={{
      headerStyle: {
            backgroundColor: '#5f70ce', 
      },
      columnsButton: true, 
      filtering: true, 

   exportMenu: [
    {
    label: "Exportar a PDF",
    exportFunc: (cols, datas) => ExportPdf(cols, datas, "DatosColeccion"),
    },
    {
    label: "Exportar a CSV",
    exportFunc: (cols, datas) => ExportCsv(cols, datas, "DatosColeccion"),
    },
    ],
   }}
    />)
}   
export default EjemploInforme