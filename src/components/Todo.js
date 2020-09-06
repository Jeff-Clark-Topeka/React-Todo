import React from 'react';
import "./Todo.css"

class Todo extends React.Component {
    render() {
        return(
            <div
                onClick={() => this.props.toggleTodo(this.props.todo["id"])}
                className={`todo${this.props.todo.completed ? " completed" : ""}`}
            >
                {console.log("Todo props", this.props)}
                <p>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo;