import { Link } from 'react-router-dom'


function About() {
    return (
        <div className = "About">
            <p>Made by Kushagra</p>
            <p>Version : 1.0.0.0</p>
            <Link to = '/'>Go Back</Link>
        </div>
    )
}

export default About
