import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    render() {
        return (
            <div>
                {this.props.todos.map((todo) => (
                    <>
                        <Todo key={todo["id"]} todo={todo} toggleTodo={this.props.toggleTodo}/>
                        {console.log("todo", todo)}
                    </>
                ))}
                <button onClick={this.props.clearCompleted}>
                    Clear Completed
                </button>
            </div>
        )
    }
}

export default TodoList;