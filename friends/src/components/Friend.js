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
                <div>
                    <button
                        onClick={() => this.props.deletePerson(this.props.person.id)}
                    >
                        DELETE {this.props.person.name}
                    </button>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}

export default Friend;