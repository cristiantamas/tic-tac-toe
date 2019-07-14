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

    checkTable(){
        var winningValue = '';

        /* Check the lines and rows*/
        for(var i = 0; i < 3; i++){
            var box1 = this.state.boxList.find(x=> x.id[0] == i && x.id[1] == 0);
            var box2 = this.state.boxList.find(x=> x.id[0] == i && x.id[1] == 1);
            var box3 = this.state.boxList.find(x=> x.id[0] == i && x.id[1] == 2);

            /* Check the line */
            if(box1.value != '' && box1.value === box2.value && box1.value === box3.value){
                winningValue = box1.value + "wins!";
            }

            /* Check the column*/
            var box1 = this.state.boxList.find(x=> x.id[0] == 0 && x.id[1] == i);
            var box2 = this.state.boxList.find(x=> x.id[0] == 1 && x.id[1] == i);
            var box3 = this.state.boxList.find(x=> x.id[0] == 2 && x.id[1] == i);

            if(box1.value != '' && box1.value === box2.value && box1.value === box3.value){
                winningValue = box1.value + "wins!";
            }
        }



        /* Check main diagonal*/
        if (winningValue === ''){
            var box1 = this.state.boxList.find(x=> x.id[0] == 0 && x.id[1] == 0);
            var box2 = this.state.boxList.find(x=> x.id[0] == 1 && x.id[1] == 1);
            var box3 = this.state.boxList.find(x=> x.id[0] == 2 && x.id[1] == 2);

            if(box1.value != '' && box1.value === box2.value && box1.value === box3.value){
                winningValue = box1.value + "wins!";
            }

        }

        /* Check secondary diagonal*/
        if (winningValue === ''){
            var box1 = this.state.boxList.find(x=> x.id[0] == 0 && x.id[1] == 2);
            var box2 = this.state.boxList.find(x=> x.id[0] == 1 && x.id[1] == 1);
            var box3 = this.state.boxList.find(x=> x.id[0] == 2 && x.id[1] == 0);

            if(box1.value != '' && box1.value === box2.value && box1.value === box3.value){
                winningValue = box1.value + "wins!";
            }
        }
        
        if (winningValue ==''){
            winningValue = 'Draw!';
            this.state.boxList.forEach(item => {
                if(item.value == '')
                    winningValue = '';
            })
        }

        if (winningValue != ''){
            alert(winningValue);
        }
    }


    handleClick(id){
        /* Update state and board*/
        this.setState(prevState => {
            const list = prevState.boxList.map( item => {
              if (item.id[0] == id[0] && item.id[1] == id[1]){
                if (item.value == ''){
                    item.value = prevState.currentMove
                }
                else{
                    alert("Cannot change this box")
                }
              }
              return item
            })

            /* Update move */
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
        });
    }

    componentDidMount(){
        this.setState({currentMove : 'X'});
    }

    componentDidUpdate(){
        this.checkTable();
    }

    render(){
        var list= [];

        boxList.forEach(item => list.push( <Box key = {item.id}
                                                item = {item}
                                                handleClick = {this.handleClick}/>))
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