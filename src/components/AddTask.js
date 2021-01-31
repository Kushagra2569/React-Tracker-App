import {useState} from 'react'

function AddTask(props) {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        if(!text){
            alert("Please enter a Task description")
        }

        props.onAdd({text, reminder});

        setText('');
        setReminder(false);
    }

    return (
        <form className = "add-form" onSubmit = {onSubmit}>
            <div className="form-control">
                <label>Task description</label>
                <input type = 'text' placeholder = 'Enter Task Description' value = {text} onChange = {function (e) {
                    return setText(e.target.value)
                }}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type = 'checkbox' checked = {reminder} value = {reminder} onChange = {function (e) {
                    return setReminder(e.currentTarget.checked)
                }}></input>
            </div>
            <input type = 'submit' className = 'btn btn-block' value = 'Save Task' ></input>
        </form>
    )
}

export default AddTask
