import React from "react";

const closeHandler = () => {
    window.location.reload();
}

const Popup = (props) => {
    return (
        <div className="overlay">
            <button onClick={closeHandler} className="close-popup">X</button>
            <div className="popup">

                <h2>Game over! </h2>
                <div className="score">
                    <p className="score">Your score<span>{props.score}</span></p>
                </div>
            </div >
        </div>
    );
};

export default Popup;