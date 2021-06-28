const ButtonDeleteNote = ({regId}) => {
    const onClick = () => {
        fetch(`http://localhost:8088/api/notes/delete?id=${regId}`, {
            method: 'DELETE'
        }).then(response => {
            console.log(response.json());
        });
        window.location.reload(false)
    }

    return <button type="button" className="btn btn-danger mr-2 mb-2" onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to Delete this Note?"
        )
        if (confirmBox === true) {
            {
                onClick()
            }
        }
    }}>Delete</button>


}

export default ButtonDeleteNote;