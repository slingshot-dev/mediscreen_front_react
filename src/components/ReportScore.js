import React, { useState, useEffect } from "react";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, useLocation} from "react-router-dom";



const Planets = () => {
    const [hasError, setErrors] = useState(false);
    const [result, setResult] = useState("");
    const {query, search} = useLocation();
    let idpatients = new URLSearchParams(search).get('idpatients');
    let prenom = new URLSearchParams(search).get('prenom');
    let nom = new URLSearchParams(search).get('nom');


    async function fetchData() {

        const res = await fetch(`http://localhost:8089/api/stats/note?symptom=diabete&patientId=${idpatients}`);
        res
            .text()
            .then(res => {console.log("test"+res); setResult(res)})
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <br/>
            <p className="Table-header"><font size={6}><strong> Patient : {prenom} {nom} </strong></font></p>
            <br/>
            <p><font size={6}><strong> Score: {result} </strong></font></p>
        </div>
    );
}
export default Planets;