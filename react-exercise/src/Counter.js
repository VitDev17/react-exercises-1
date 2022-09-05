import React from "react";
import {CounterDisplay} from './CounterDisplay'

export class Counter extends React.Component {
    render() {
        return <CounterDisplay 
        initialValue = {this.props.value}
        incrementInterval={this.props.interval}
        incrementAmount={this.props.amount}/>
    }
    
}

//ESERCIZIO STATE 02
//Should be an object, state is an object which can be filled with any kind of data, I can also insert a function
//and I have access to it by the class instance itself