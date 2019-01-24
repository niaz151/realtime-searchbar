import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import Content from './components/Content';

class App extends Component {

  constructor(){
    super()
    this.state = {
      query:""
    }
  }

  handleInputChange = (e) => {
    let newQuery = e.target.value
    this.setState({query:newQuery})
  }

  render() {
    return (
      <div className='container' onChange={this.handleInputChange}>
        <SearchBar/>
        <Content query={this.state.query} />
      </div>
    );
  }
}

export default App;
