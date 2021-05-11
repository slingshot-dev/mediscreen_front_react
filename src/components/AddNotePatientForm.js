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
        // console.log(data);


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

/*

<input {...register('firstName')} /> {/!* register an input *!/}
<input {...register('testtName')} /> {/!* register an input *!/}
<input {...register('lastName', { required: true })} />
{errors.lastName && <p>Last name is required.</p>}
<input {...register('age', { pattern: /\d+/ })} />
{errors.age && <p>Please enter number for age.</p>}
*/




/*class MyNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            regId:'',
            patientId:'',
            note:''};
    }



    mySubmitHandler = (event) => {

        const {match, location} = this.props;
    let idpatients = this.props.match.params.idpatients;

        event.preventDefault();
        alert("Vous allez creer une nouvelle Note pour ce patient: " + this.state.patientId +" "+ this.state.note);

        const data = { nom:this.state.patientId, prenom:this.state.note }

        fetch(`localhost:8088/api/notes/add`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}

        }).then(response => {
            console.log(response.json());
        })

            .then(res => res.json())

            .catch(error => console.error('Error:', error))

            .then(response => console.log('Success:', response));


    }
    myChangeHandler = (event) => {

        let nam = event.target.name;
        let val = event.target.value;

        /!*        if (nam === "datenaissance") {
                    if (!Number(val)) {
                        alert("La date de Naissance doit etre renseignée");
                    }
                }*!/

        this.setState({[nam]: val});
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h2>Patient:  {this.state.patientId} </h2>
                <p>Note:  </p>
{/!*                <input
                    type='text'
                    name='note'
                    onChange={this.myChangeHandler}
                />*!/}

                <Form.TextArea
                    name="note"
                    style={{height: '200px', width: '1000px'}}
                    placeholder='Tell us more about you...'
                    onChange={this.myChangeHandler} />

                <input
                    type='submit'
                    className="btn btn-primary"
                />
            </form>
        );
    }
}

ReactDOM.render(<MyNoteForm />, document.getElementById('root'));
export default MyNoteForm;*/
