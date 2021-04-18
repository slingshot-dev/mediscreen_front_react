

const ButtonUpdate = (patients) => {
    const onClick = () => {
        fetch('/api/patients/update', {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(patients.patients)
        }).then(response => {
            console.log(response.json());
        });
    }
    return <button type="button" className="btn btn-primary mr-2 mb-2" onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to Update this Patient?"
        )
        if (confirmBox === true) {
            {
                onClick()
            }
        }
    }}>Update</button>

}

export default ButtonUpdate;
