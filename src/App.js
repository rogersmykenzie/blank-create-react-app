import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    dropDownMenuStatus: ''
  }


  render() {
    return (
      <div className="App">
        <menu className={this.state.dropDownMenuStatus}>
          
        </menu>
        <nav>
          <h1>Website</h1>
          <button
          onClick={() => this.setState({
            dropDownMenuStatus: 
            this.state.dropDownMenuStatus === 'drop-down-menu-open' ?
            'drop-down-menu-closed' :
            'drop-down-menu-open'
          })}
          >Do Stuff</button>
        </nav>
      </div>
    );
  }
}

export default App;
