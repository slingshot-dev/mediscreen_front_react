import React, {useState} from 'react';

import ReportScore from "../components/ReportScore";


const App = () => {

    return (
        <div className="container">
            <div className="flex-row">
                <div className="flex-large">
                    <center><h2>Score</h2></center>
                    <ReportScore />
                </div>
            </div>
        </div>
    )
}
export default App