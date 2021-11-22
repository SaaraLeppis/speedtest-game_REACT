import React from 'react';

const Circle = (props) => {
    return (
        <div
            style={{ backgroundColor: props.color }}
            className={`circle ${props.active ? "active" : ""}`} onClick={props.click}>

        </div >
    );
};
export default Circle;