import React from "react";

export class Counter extends React.Component {
    render() {
        return <h1>Count: {this.state.count}</h1>
    }
    state = {
        count : 0,
    }
    constructor(props) {
        super (props)
        setInterval(() => {this.setState((state) => {
            return {count: state.count + 1}
        })
        }, 1000)
    }
}

//ESERCIZIO STATE 02
//Should be an object, state is an object which can be filled with any kind of data, I can also insert a function
//and I have access to it by the class instance itself