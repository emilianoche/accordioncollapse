import React, { Component } from 'react';
import BoxAccordion from './BoxAccordion';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      open: false,
      key: null
    }
  }
  
 onHandleClick = () => (event) => {
   console.log(event.target)
      this.setState({
        key: event.target.id
      });
  }

  render() {
    const contents = [{
      title: 'Section 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },{
      title: 'Section 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },{
      title: 'Section 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }]
    return (
      <div className="accordion">
        {contents.map((content, i) => <BoxAccordion key={i} content={content} currentPosition={this.state.key} indexPosition={i} onHandleClick={this.onHandleClick}/>)}
      </div>
    );
  }
}

export default App;
