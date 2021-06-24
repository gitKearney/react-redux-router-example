import React from "react";

function Modal(props) {
  const DISPLAY = props.title.length ? 'block' : 'none';
  const TITLE = props.title.length ? props.title : '';

  return (
    <div className="w3-modal" style={ { display: DISPLAY } }>
      <div className="w3-modal-content">
        <div className="w3-container">
          <h3>{ TITLE }</h3>
          <span className="w3-button w3-display-topright" onClick={props.closeModal}>
            &times;
          </span>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
