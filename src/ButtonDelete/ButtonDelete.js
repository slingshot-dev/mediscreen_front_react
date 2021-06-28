const ButtonDelete = ({idPatient}) => {
    const onClick = () => {
        fetch(`/api/patients/delete?id=${idPatient}`, {
            method: 'DELETE'
        }).then(response => {
            console.log(response.json());
        });
        window.location.reload(false)
    }

    return <button type="button" className="btn btn-danger mr-2 mb-2" onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to Delete this Patient?"
        )
        if (confirmBox === true) {
            {
                onClick()
            }
        }
    }}>Delete</button>

}

export default ButtonDelete;