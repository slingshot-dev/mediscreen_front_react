const ButtonUpdateNote = (note) => {
    const onClick = () => {
        fetch('http://localhost:8088/api/notes/update', {
            method: 'POST',
            headers: {"Content-type": "application/json; charset=UTF-8"},
            body: JSON.stringify(note.note)
        }).then(response => {
            console.log(response.json());
        });
    }
    return <button type="button" className="btn btn-primary mr-2 mb-2" onClick={() => {
        const confirmBox = window.confirm(
            "Do you really want to Update this Note?"
        )
        if (confirmBox === true) {
            {
                onClick()
            }
        }
    }}>Update</button>

}

export default ButtonUpdateNote;