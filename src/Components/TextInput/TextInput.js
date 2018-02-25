import React from 'react';
import PropTypes from 'prop-types';
import './textInput.css';

class TextInput extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            hasFocus: false
        };
    }

    handleFocus = () => {
        this.setState({ hasFocus: true });
    };

    handleBlur = () => {
        this.setState({ hasFocus: false });
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    render() {
        let classname = this.state.hasFocus ? "textInput__input--focused":"textInput__input";
        return(
            <div>
                <input
                    className={classname}
                    type="text"
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                />
            </div>
        );
    }
}

TextInput.propTypes = {
    placeholder: PropTypes.string
};

export default TextInput;
