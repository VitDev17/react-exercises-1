import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        return <h1>Count: {this.state.count}</h1>
    }
    state = {
        count : this.props.initialValue,
    }
    componentDidMount() {
        setInterval(() => 
            {this.setState((state) => {
                return {count: state.count + this.props.incrementInterval}
                })
         }, this.props.incrementAmount)
    }
}
//Non serve il costruttore se utilizzo il metodo
//componentDidMount per inizializzare ad esempio
//lo stato, ma il costruttore viene chiamato
//coumque ogni volta che istanzio una classe 