//This JS file will have a popup-box come up when something is pressed
//we could have this for when a photo is pressed. 

import React from "react";

const Popup = props => {
    return (
        <div className = "popup-box">
            <div className = "box">
                <span className = "close-icon" onClick = {props.handleClose}>x</span>
                {props.content}
            </div>
        </div>
    );
};

export default Popup;