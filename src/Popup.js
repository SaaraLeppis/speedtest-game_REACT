import React from "react";

/*const closeHandler = () => {
    window.location.reload();
}*/
/* button on click ={props.close}                 
this was earlier: <button onClick={closeHandler} className="close-popup">X</button>
*/
const Popup = (props) => {
    return (
        <div className="overlay">
            <div className="popup">
                <h2>Game over</h2>
                <p className="score">Your score: <span>{props.score}</span></p>
                <button onClick={props.close} className="close-popup">X</button>
            </div >
        </div>
    );
};

export default Popup;