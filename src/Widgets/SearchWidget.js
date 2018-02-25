import React from 'react';
import SearchTextInput from '../Components/SearchTextInput/SearchTextInput';
import './searchWidget.css';

class SearchWidget extends React.Component {

    render() {
        return(
           <div className="searchWidget__container">
               <h2 className="searchWidget__title">Where are you going?</h2>
               <div className="searchWidget__searchBox">
                   <SearchTextInput />
               </div>
           </div>
        );
    }
}

export default SearchWidget;