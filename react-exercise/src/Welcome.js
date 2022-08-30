import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name ?? 'friend'}!</p>
                <p>Your age is {this.props.age ?? 18}.</p>
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