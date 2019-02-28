import React from 'react';

class Friend extends React.Component {

    render() {
        return (
            <div>
                <div >
                    Name: {this.props.person.name}
                    <br />
                    Age: {this.props.person.age}
                    <br />
                    email: {this.props.person.email}
                    <br />
                    id: {this.props.person.id}
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Friend;