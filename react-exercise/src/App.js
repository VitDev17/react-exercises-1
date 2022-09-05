import React from "react";
import {Hello} from './Hello'
import {Welcome} from './Welcome'
import {Counter} from './Counter'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome name='John'/>
                <Counter 
                value={0}
                interval={1}
                amount={1000} 
                />
            </div>
        )
    }
}
//ES Components-08 
//It's possible to use one component more than once, just it
//will render two times, but doesn't give error

//ES Components-09
//It's possible to render the component here, but I have to import the message
//component in App instead of Hello