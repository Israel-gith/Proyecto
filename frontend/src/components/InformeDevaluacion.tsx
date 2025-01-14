import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

interface IDevaluacion {
  articulo: string;
  meses: number;
  devaluacion: number;
}

function EjemploInforme({datos}){

    const col: Array<Column<IDevaluacion>> = [
    { title: "Articulo", field: "articulo"},
    { title: "Meses", field: "meses",  type: "numeric", filtering: false },
    { title: "Devaluacion", field: "devaluacion",  type: "numeric", filtering: false},
  ];

 const tableData: Array<IDevaluacion> = datos;

return (
    <MaterialTable
    columns={col} data={tableData}

    title='Devaluacion'
    options={{
      headerStyle: {
            backgroundColor: '#5f70ce', 
      },
      columnsButton: true, 
      filtering: true, 

   exportMenu: [
    {
    label: "Exportar a PDF",
    exportFunc: (cols, datas) => ExportPdf(cols, datas, "DatosDevaluacion"),
    },
    {
    label: "Exportar a CSV",
    exportFunc: (cols, datas) => ExportCsv(cols, datas, "DatosDevaluacion"),
    },
    ],
   }}
    />)
}   
export default EjemploInforme