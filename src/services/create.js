import React, {useState} from 'react';
import AddPatientForm from "../components/AddPatientForm";
import UserTable from "../components/UserTable";


    const App = () => {

        return (
            <div className="container">
                <div className="flex-row">
                    <div className="flex-large">
                        <center><h2>Ajouter Patient</h2></center>
                        <AddPatientForm />
                    </div>
                </div>
            </div>
        )
    }
export default App
