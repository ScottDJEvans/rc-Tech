import React from 'react';
import PropTypes from 'prop-types';
import { suggestionsFetch } from '../AutofillSearch';
import './textInput.css';

class TextInput extends React.Component {

    constructor() {
        super();
        this.state = {
            value: '',
            hasFocus: false,
            results: null
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

        /*Constant 503 error, spent too much time trying to rectify so out fo time for refactoring!
          Number of search results is set to 6 as no other figure is given for mobile
        */
        if(this.state.value.length >= 2) {
            let results = suggestionsFetch(this.state.value);
            this.setState({ results: results });
            console.log(this.state.results);
        }
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
