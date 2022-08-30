import React from "react";
import {Age} from './Age'

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {this.props.name === 'John' &&
                    <p>Welcome, {this.props.name}!</p>
                }
                <Age age={60}/>
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