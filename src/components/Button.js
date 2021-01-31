import PropTypes from 'prop-types'


function Button(props) {
    return <button onClick = {props.Onclick} style = {{backgroundColor: props.color}} className = 'btn'>{props.text}</button>
}

Button.defaultProps = {
    text: 'click',
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    Onclick: PropTypes.func,
}

export default Button
