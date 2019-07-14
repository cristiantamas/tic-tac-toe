import React from 'react';


function Box(props){
    return(
        <div style = {boxStyle}
            onClick = {() => props.handleClick(props.item.id)}> {props.item.value} </div>
    )
}

const boxStyle = {
    backgroundColor: 'white',
    width: '30%',
    height: '30%',
    border: '5px black',
    margin: '0.5%',
    float: 'left'
}

export default Box;