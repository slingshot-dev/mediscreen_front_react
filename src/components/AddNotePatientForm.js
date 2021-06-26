import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Form} from 'semantic-ui-react'
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Home from "../Home";

function App() {

    const {query, search, search2, search3} = useLocation();
    let patientId = new URLSearchParams(search).get('patientId');
    let nom = new URLSearchParams(search).get('nom');
    let prenom = new URLSearchParams(search).get('prenom');

    const history = useHistory();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch(`http://localhost:8088/api/notes/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}

        }).then(response => {
            console.log(response.json());
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        history.push("/");


    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label><h2>Patient : {prenom}  {nom}</h2></label>
            <input
                type="hidden"
                value={patientId}
                {...register('patientId')}/>
            <Form.TextArea
                name="note"
                style={{height: '200px', width: '1000px'}}
                {...register('note')}
                placeholder='Inserer note sur le Patient...'/>
            <input type="submit" className="btn btn-primary"/>
        </form>
    );

}
export default App;
