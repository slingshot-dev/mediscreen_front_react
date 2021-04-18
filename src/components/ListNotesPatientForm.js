
import React, { useState, useEffect } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, {Type} from 'react-bootstrap-table2-editor';
import {BrowserRouter as Router, Link, useLocation} from "react-router-dom";
import ButtonUpdateNote from "../ButtonUpdateNote/ButtonUpdateNote";
import ButtonDeleteNote from "../ButtonDeleteNote/ButtonDeleteNote";


const Planets = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState([]);
    const {query, search, search2, search3} = useLocation();
        let idpatients = new URLSearchParams(search).get('idpatients');
        let prenom = new URLSearchParams(search3).get('prenom');
        let nom = new URLSearchParams(search2).get('nom');

    const columns = [{
        dataField: 'regId',
        text: 'ID',
        editable: false,
        headerStyle: (colum, colIndex) => {
            return { width: '5%', textAlign: 'center' };
        }
    }, {
        dataField: 'patientId',
        text: 'PatientId',
        editable: false,
        headerStyle: (colum, colIndex) => {
            return { width: '15%', textAlign: 'center' };
        }
    }, {
        dataField: 'note',
        text: 'Note',
        editable: true,
        headerStyle: (colum, colIndex) => {
            return { width: '15%', textAlign: 'center' };
        }
    }, {
        text: 'Actions',
        editable: false,
        formatter: (rowContent, row) => {
            return (
                <div style={{ display: "flex"}}>
                    <Link to={{pathname: `/services/notes`, search: `?patientId=${row.patientId}`, search2: `?nom=${nom}`, search3: `?prenom=${prenom}`}} className="btn btn-secondary mr-2 mb-2">Create</Link>
                    <ButtonUpdateNote note={row}/>
                    <ButtonDeleteNote regId={row.regId}/>
                </div>
            )
        }
    }];


    async function fetchData() {

        const res = await fetch(`http://localhost:8088/api/notes/listpatient?patientId=`+idpatients);
           res
               .json()
               .then(res => setPlanets(res))
               .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <center>
                <br></br>
                <p className="Table-header"><font size={6}><strong> Patient : {prenom} {nom} </strong></font></p>
            </center>
            {/*<p><font size={4}><strong>Creer une nouvelle Note: <Link to="/services/notes" className="btn btn-primary mr-2 mb-2">Create</Link></strong></font></p>*/}

            <BootstrapTable
                striped
                hover
                keyField='regId'
                data={ planets }
                columns={ columns }
                cellEdit={cellEditFactory({ mode: "click" ,blurToSave: true})}
                // filter={filterFactory()}
                pagination={paginationFactory()}
            />
        </div>
    );
}
export default Planets;