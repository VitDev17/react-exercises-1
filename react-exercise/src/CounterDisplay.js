import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        return <h1>Count: {this.state.count}</h1>
    }
    state = {
        count : this.props.initialValue,
    }
    constructor(props) {
        super (props)
        setInterval(() => 
            {this.setState((state) => {
                return {count: state.count + this.props.incrementInterval}
                })
         }, this.props.incrementAmount)
    }
}