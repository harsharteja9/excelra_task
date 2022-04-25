import React from 'react';

const ButtonComp = (props) => {
    return (
        <>
            <button onClick={() => props.fn()}>{props.children}</button>
        </>
    )
}

export default ButtonComp;