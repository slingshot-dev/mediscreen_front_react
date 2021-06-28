
import React, { useState, useEffect } from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor';
import {BrowserRouter as Router, Link} from "react-router-dom";
import ButtonUpdate from "./ButtonUpdate/ButtonUpdate";
import ButtonDelete from "./ButtonDelete/ButtonDelete";


const Patients = () => {
    const [hasError, setErrors] = useState(false);
    const [patients, setPatients] = useState([]);
    const [setScore] = useState();

    const columns = [{
        dataField: 'idpatients',
        text: 'ID',
        editable: false,
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
        formatter: (cell) => {
            let dateObj = cell;
            if (typeof cell !== 'object') {
                dateObj = new Date(cell);
            }
            return `${('0' + dateObj.getUTCDate()).slice(-2)}/${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}/${dateObj.getUTCFullYear()}`;
        },
        editor: { type: Type.DATE},
        headerStyle: (colum, colIndex) => {
            return { width: '10%', textAlign: 'center' };
        }
    }, {
        dataField: 'genre',
        text: 'Genre',
        editor: {type: Type.SELECT, options: [{
                value: 'M',
                label: 'M'
            }, {
                value: 'F',
                label: 'F'
            }]},
        headerStyle: (colum, colIndex) => {
            return { width: '5%', textAlign: 'center' };
        }
    }, {
        dataField: 'adresse',
        text: 'Adresse',
        headerStyle: (colum, colIndex) => {
            return {width: '15%', textAlign: 'center'};
        }
    }, {
        dataField: 'telephone',
        text: 'Telephone',
        headerStyle: (colum, colIndex) => {
            return { width: '10%', textAlign: 'center' };
        }

    }, {
        text: 'Actions',
        editable: false,
        formatter: (rowContent, row) => {
            return (
                <div style={{ display: "flex"}}>
                    <ButtonUpdate patients={row}/>
                    <Link to={{pathname: `/services/listNotes`, search: `?idpatients=${row.idpatients}&nom=${row.nom}&prenom=${row.prenom}`}} className="btn btn-secondary mr-2 mb-2">Notes</Link>
                    <ButtonDelete idPatient={row.idpatients}/>
                    <Link to={{pathname: `/services/score`, search: `?idpatients=${row.idpatients}&nom=${row.nom}&prenom=${row.prenom}`}} className="btn btn-secondary mr-2 mb-2">ReportScore</Link>
                </div>
            )
        }
    }];


    async function fetchData() {
        const res = await fetch("/api/patients/list");
        res
            .json()
            .then(res => setPatients(res))
            .catch(err => setErrors(err));
    }


    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <center>
            <p className="Table-header"><font size={6}><strong>Liste des Patients</strong></font></p>
            </center>
            <br/>
            <br/>
            <p><font size={4}><strong>Creer un nouveau Patient: <Link to="/services/create" className="btn btn-primary">Create</Link></strong></font></p>
            <br/>
            <BootstrapTable
                striped
                hover
                keyField='idpatients'
                data={ patients }
                columns={ columns }
                cellEdit={cellEditFactory({ mode: "click" ,blurToSave: true})}
                filter={filterFactory()}
                pagination={paginationFactory()}
            />
        </div>
    );
}
export default Patients;