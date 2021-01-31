import {FaTimes} from 'react-icons/fa'

function Task(props) {
    return (
        <div className = {`task ${props.task.reminder ? 'reminder' : ''}`} onDoubleClick = {function () {
            return props.onToggle(props.task.id);
        }}>
            <h3>{props.task.text} <FaTimes onClick = {function () {
                return props.onDelete(props.task.id);
            }}/></h3>

        </div>
    )
}

export default Task
