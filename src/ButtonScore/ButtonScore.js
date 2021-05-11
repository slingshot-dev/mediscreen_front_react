import {useState} from "react";

const ButtonScore = ({idPatient}) => {


    const onClick = () => {
        const test2 = fetch(`http://localhost:8089/api/stats/note?symptom=diabete&patientId=${idPatient}`);
    }

    return <button type="button" className="btn btn-danger mr-2 mb-2" onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to obtain Score from this Patient?"
        )
        if (confirmBox === true) {
            {
                onClick()
            }
        }
    }}>Score</button>

}

export default ButtonScore;