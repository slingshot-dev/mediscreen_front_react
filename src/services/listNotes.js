import React, {useState} from 'react';
import AddNotePatientForm from "../components/AddNotePatientForm";

import UserTable from "../components/UserTable";
import ListNotesPatientForm from "../components/ListNotesPatientForm";


const App = () => {

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <center><h2>Liste des Notes du Patient</h2></center>
                    <ListNotesPatientForm/>
                </div>
            </div>
        </div>
    )
}
export default App