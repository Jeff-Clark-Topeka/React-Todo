import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map((item) => (
                    <Todo key={item.id} item={item} toggleItem={this.props.toggleItem}/>
                ))}
                <button onClick={this.props.clearCompleted}>
                    Clear Completed
                </button>
            </div>
        )
    }
}

export default TodoList;