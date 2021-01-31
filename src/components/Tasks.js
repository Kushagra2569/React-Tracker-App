import Task from './Task'

function Tasks({tasks , onDelete , onToggle}) {
    return (
        <div>
            {tasks.map(function(task) {
                return <Task key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle} />
            })}
        </div>
    )
}

export default Tasks
