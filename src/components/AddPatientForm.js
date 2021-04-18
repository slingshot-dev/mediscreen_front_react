import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Home from "../Home";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirection: false,
            nom:'',
            prenom:'',
            datenaissance:'',
            genre:'',
            adresse:'',
            telephone:''};
    }


    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Vous allez creer un nouveau Patient: " + this.state.prenom +" "+ this.state.nom);

         const data = { nom:this.state.nom, prenom:this.state.prenom , datenaissance:this.state.datenaissance , genre:this.state.genre , adresse:this.state.adresse , telephone:this.state.telephone}

         fetch(`/api/patients/add`, {
             method: 'POST',
             body: JSON.stringify(data),
             headers: {"Content-type": "application/json; charset=UTF-8"}

         }).then(response => {
             console.log(response.json());
         })

             .then(res => res.json())

             .catch(error => console.error('Error:', error))

             .then(response => console.log('Success:', response))
             .then(() => this.setState({ redirection: true }));

    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

/*        if (nam === "datenaissance") {
            if (!Number(val)) {
                alert("La date de Naissance doit etre renseignée");
            }
        }*/

        this.setState({[nam]: val});
    }
    render() {

        const { redirection } = this.state;
        if (redirection) {
            //Affichage de la redirection
            return <Redirect to='/'/>;
        }

        return (
            <form onSubmit={this.mySubmitHandler}>
                <h2>Patient:  {this.state.prenom} {this.state.nom}</h2>
                <p>Nom: </p>
                <input
                    type='text'
                    name='nom'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Prenom:                </p>
                <input
                    type='text'
                    name='prenom'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Date de Naissance:</p>
                <input
                    type='text'
                    name='datenaissance'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Genre:</p>
                <input
                    type='text'
                    name='genre'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Adresse:</p>
                <input
                    type='text'
                    name='adresse'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Telephone:</p>
                <input
                    type='text'
                    name='telephone'
                    onChange={this.myChangeHandler}
                />
                <br/>
                <br/>

                <input
                    type='submit'
                    className="btn btn-primary"
                />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
export default MyForm;