import Button from './Button'
import { useLocation} from 'react-router-dom'

function Header (props) {
    const location = useLocation();

    return (
        <header className = 'header'>
            <h1>{props.title}</h1>
            {location.pathname === '/' && <Button text = {props.showAdd ? 'Close' : 'Add'} color = {props.showAdd ? 'red' : 'green'} Onclick = {props.onShowAddTask}/>}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
