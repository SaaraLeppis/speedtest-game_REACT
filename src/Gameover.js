import React from "react";


/*const closeHandler = () => {
    window.location.reload();
}*/
/* button on click ={props.close}                 
this was earlier: <button onClick={closeHandler} className="close-popup">X</button>
*/
const Gameover = (props) => {
    let result = props.score;
    return (
        <div className="overlay">
            <div className="popup">
                <h2>Game over</h2>
                <p className="score">Your score: <span>{props.score}</span></p>

                {
                    result < 80 ? <p>Little bit like 🐌</p>
                        : result > 80 && result < 120 ? <p> Wow 🔥</p>
                            : <p>⚡⚡You are great⚡⚡</p>
                }
                <p className="comment"></p>
                <button onClick={props.close} className="close-popup">X</button>
            </div >
        </div>
    );
};

export default Gameover;