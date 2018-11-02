import React, { Component } from 'react';
import PropTypes from 'prop-types';
 class BoxAccordion extends Component {  
  render(){
    const { indexPosition, currentPosition, onHandleClick, content: { title, text } } = this.props;
     return(
      <div>
        <button className="accordion-button" id={indexPosition} onClick={onHandleClick(currentPosition)}>{title}</button>
          <div className={indexPosition ===  parseInt(currentPosition) ? "panel open" : "panel"}>
            <p>{text}</p>
          </div>
      </div>
    )
  }
}

BoxAccordion.propTypes = {
  indexPosition: PropTypes.number,
  currentPosition: PropTypes.string
}

export default BoxAccordion;