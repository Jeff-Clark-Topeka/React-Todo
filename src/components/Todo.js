import React from 'react';

class Todo extends React.Component {
    render() {
        return(
            <div
                onClick={() => this.props.toggleItem(this.props.item.id)}
            >
                <p>{this.props.item.task}</p>
            </div>
        )
    }
}

export default Todo;