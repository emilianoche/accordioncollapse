import React, { Component } from 'react';

export default class BoxAccordion extends Component {  
  render(){
  const { indexPosition, currentPosition } = this.props;
    return(
      <div>
        <button className="accordion-button" id={indexPosition} onClick={this.props.onHandleClick(currentPosition)}>{this.props.content.title}</button>
          <div className={parseInt(indexPosition) ===  currentPosition ? "panel open" : "panel"}>
            <p>{this.props.content.text}</p>
          </div>
      </div>
    )
  }
}