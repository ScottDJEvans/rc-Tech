import React from 'react';
import TextInput from '../TextInput/TextInput';
import './searchTextInput.css';

class SearchTextInput extends React.Component {


    render() {
       return(
           <div className="searchTextInput__container">
               <div className="searchTextInput__label">Pick-up Location</div>
               <div className="searchTextInput__searchbox">
                    <TextInput placeholder="city, airport, station, region and district..."/>
               </div>
        </div>
        );
    }
}

export default SearchTextInput;