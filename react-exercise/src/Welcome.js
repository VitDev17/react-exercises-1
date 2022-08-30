import React from "react";
import {Age} from './Age'

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name ?? 'friend'}!</p>
                <Age age={21}/>
            </div>
        )
    }
}

//static property
// Welcome.defaultProps = {
//     name: 'my friend',
// }

//If no name is passed just the props is undefined, I can give one default value by the double question mark
//or by creating a static property