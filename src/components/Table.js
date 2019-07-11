import React from 'react';
import Box from './Box';
import boxList from './boxList';

class Table extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            boxList: boxList,
            currentMove: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.checkTable = this.checkTable.bind(this)
    }

    checkTable(id){
       /* var winningValue = '';
        var x = this.state.boxList[id].x;
        var y = this.state.boxList[id].y;*/
    }


    handleClick(id){
        console.log("id: ", id);
        this.setState(prevState => {
            const list = prevState.boxList.map( item => {
              if (item.id === id){
                if (item.value === ''){
                    item.value = prevState.currentMove
                }
                else{
                    console.log(item.value)
                    alert("Cannot change this box")
                }
              }
              return item
            })

            var move = '';
            if (prevState.currentMove === 'X'){
                move = '0'
            }
            else{
                move = 'X'
            }
      
            return {
              boxList: list,
              currentMove: move
            }
          })


    }

    componentDidMount(){
        this.setState({currentMove : 'X'});
    }


    render(){
        var list= [];

        boxList.forEach(row =>{
            console.log("row: ", row)
            list.push(row.map( item => <Box key = {item.id}
                item = {item}
                handleClick = {this.handleClick}/>))
        })
        return(
            <div style={tableStyle}>
                {list}
            </div>
        );
    }

}

const tableStyle ={
    display: 'inline-block',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    backgroundColor: 'red',
    textAlign: 'center'
};

const boxStyle = {
    margin: '40px',
    border: '5px solid pink'
  };

export default Table;