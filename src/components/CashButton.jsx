import React from 'react'

function CashButton(){
    function handleClick(){
        alert('jk. What an L for you');
    }
    
    return(
        <button onClick={handleClick}>
            Click For $1
        </button>
    );

    
}

export default CashButton;