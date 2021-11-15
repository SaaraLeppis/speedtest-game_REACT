import React from "react";

const closeHandler = () => {
    window.location.reload();
}

const Popup = (props) => {
    return (
        <div className="overlay">

            <div className="popup">
                <button onClick={closeHandler} className="close-popup">X</button>
                <h2>Game over</h2>
                <p className="score">Your score: <span>{props.score}</span></p>
            </div >
        </div>
    );
};

export default Popup;