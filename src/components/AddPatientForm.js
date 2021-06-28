import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import Home from "../Home";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {confirmAlert} from "react-confirm-alert";

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

        var x = this.state.nom;
        if (x === "") {
            confirmAlert( {
                title: 'Alert Message',
                message: 'Le champs Nom doit etre rempli',
                buttons: [
                    {
                        label: 'Ok',
                    },
                   ]
            })
            return false;
        }

        var x = this.state.prenom;
        if (x === "") {
            confirmAlert( {
                title: 'Alert Message',
                message: 'Le champs Prenom doit etre rempli',
                buttons: [
                    {
                        label: 'Ok',
                    },
                ]
            })
            return false;
        }

        var x = this.state.datenaissance;
        if (x === "") {
            confirmAlert( {
                title: 'Alert Message',
                message: 'Le champs Date de Naissance doit etre rempli',
                buttons: [
                    {
                        label: 'Ok',
                    },
                ]
            })
            return false;
        }

        var x = this.state.genre;
        if (x === "") {
            confirmAlert( {
                title: 'Alert Message',
                message: 'Le champs Genre doit etre rempli',
                buttons: [
                    {
                        label: 'Ok',
                    },
                ]
            })
            return false;
        }

        var x = this.state.adresse;
        if (x === "") {
            confirmAlert( {
                title: 'Alert Message',
                message: 'Le champs Adresse doit etre rempli',
                buttons: [
                    {
                        label: 'Ok',
                    },
                ]
            })
            return false;
        }

        var x = this.state.telephone;
        if (x === "") {
            confirmAlert( {
                title: 'Alert Message',
                message: 'Le champs Telephone doit etre rempli',
                buttons: [
                    {
                        label: 'Ok',
                    },
                ]
            })
            return false;
        }


        confirmAlert({
            title: 'Créer Patient : '+ this.state.prenom +" "+ this.state.nom,
            message: 'confirmez envoi ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
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
                            .then(() => this.setState({redirection: true}));
                    }
                },
                {
                    label: 'No',
                }
            ]
        });

        const data = { nom:this.state.nom, prenom:this.state.prenom , datenaissance:this.state.datenaissance , genre:this.state.genre , adresse:this.state.adresse , telephone:this.state.telephone}


    }

    myChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name === "datenaissance") {
            if (!(/^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])/.test(value))) {
                alert("Date de Naissance : Format non valide");

            }
        }

        if (name === "nom") {
            if (!(/^[a-zA-Z]+$/.test(value))) {
                alert("Le Nom ne peut contenir que du texte")
            }
        }

        if (name === "prenom") {
            if (!(/^[a-zA-Z]+$/.test(value))) {
                alert("Le Prenom ne peut contenir que du texte")
            }
        }

        if (name === "telephone") {
            if (!(/^(?:[\s-]*\d{2}){5}/.test(value))) {
                alert("Telephone : Format non valide")
            }
        }

        this.setState({[name]: value});
    }
    render() {

        const { redirection } = this.state;
        if (redirection) {
            //Affichage de la redirection
            return <Redirect to='/'/>;
        }

        return (
            <form onSubmit={this.mySubmitHandler}>
                <br/>
                <br/>
                <h2>Patient:  {this.state.prenom} {this.state.nom}</h2>
                <p>Nom: </p>
                <input
                    type='text'
                    name='nom'
                    onBlur={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Prenom:                </p>
                <input
                    type='text'
                    name='prenom'
                    onBlur={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Date de Naissance:</p>
                <input
                    type='text'
                    name='datenaissance'
                    onBlur={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Genre:
                    <select name='genre' defaultValue="M" onBlur={this.myChangeHandler}>
                        <option value="F">Feminin</option>
                        <option selected value="M">Masculin</option>
                    </select></p>
                <br/>
                <p>Adresse:</p>
                <input
                    type='text'
                    name='adresse'
                    onBlur={this.myChangeHandler}
                />
                <br/>
                <br/>
                <p>Telephone:</p>
                <input
                    type='text'
                    name='telephone'
                    onBlur={this.myChangeHandler}
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

export default MyForm;