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
                    result < 100 ? <p>Little bit like <span role="img" aria-label="snail"> 🐌</span></p>
                        : result > 100 && result < 180 ? <p> Wow <span role="img" aria-label="flame"> 🔥 </span></p>
                            : <p><span role="img" aria-label="flames">⚡⚡</span>That was great<span role="img" aria-label="salamat">⚡⚡</span></p>
                }
                <p className="comment"></p>
                <button onClick={props.close} className="close-popup">X</button>
            </div >
        </div>
    );
};

export default Gameover;