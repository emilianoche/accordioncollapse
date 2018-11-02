import React, { Component } from 'react';

export default class BoxAccordion extends Component {  
  render(){
    return(
      <div>
        <button className="accordion-button" id={this.props.indexPosition} onClick={this.props.onHandleClick(this.props.currentPosition)}>{this.props.content.title}</button>
          <div className={this.props.indexPosition == this.props.currentPosition ? "panel open" : "panel"}>
            <p>{this.props.content.text}</p>
          </div>
      </div>
    )
  }
}