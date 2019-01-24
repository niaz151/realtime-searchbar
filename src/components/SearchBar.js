import React from 'react';

class SearchBar extends React.Component{

    render(){
        return(
            <form>
                <input type="text" className='input-text' placeholder='Search Element' />
            </form>
        )
    }
}

export default SearchBar;