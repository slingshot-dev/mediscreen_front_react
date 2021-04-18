import React from 'react'
import {textFilter} from "react-bootstrap-table2-filter";
import ButtonUpdate from "../ButtonUpdate/ButtonUpdate";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

const TablePatient = () => (

    {
        dataField: 'idpatients',
        text: 'ID',
        headerStyle: (colum, colIndex) => {
            return { width: '5%', textAlign: 'center' };
        }
    }, {
        dataField: 'nom',
        text: 'Nom',
        filter: textFilter(),
        headerStyle: (colum, colIndex) => {
            return { width: '15%', textAlign: 'center' };
        }
    }, {
        dataField: 'prenom',
        text: 'Prenom',
        filter: textFilter(),
        headerStyle: (colum, colIndex) => {
            return { width: '15%', textAlign: 'center' };
        }
    }, {
        dataField: 'datenaissance',
        text: 'Date de Naissance',
        headerStyle: (colum, colIndex) => {
            return { width: '10%', textAlign: 'center' };
        }
    }, {
        dataField: 'genre',
        text: 'Genre',
        headerStyle: (colum, colIndex) => {
            return { width: '5%', textAlign: 'center' };
        }
    }, {
        dataField: 'adresse',
        text: 'Adresse',
    }, {
        dataField: 'telephone',
        text: 'Telephone',
        headerStyle: (colum, colIndex) => {
            return { width: '10%', textAlign: 'center' };
        }
    }, {
        text: 'Actions',

        formatter: (rowContent, row) => {
            return (
                <div>
                    <ButtonUpdate idPatient2={row.idpatients}/>
                    <span/>
                    <ButtonDelete idPatient={row.idpatients}/>
                </div>
            )
        }
    }
    );
export default TablePatient







