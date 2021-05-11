import React, {useState} from 'react';
import AddNotePatientForm from "../components/AddNotePatientForm";

const App = () => {

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <center><h2>Ajouter Notes</h2></center>
                    <AddNotePatientForm />
                </div>
            </div>
        </div>
    )
}
export default App
