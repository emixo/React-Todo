import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: ''
        }
    }

    handleChanges = e => {
        this.setState({
            keyword: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.addItem(this.state.keyword)
        this.setState({
            keyword: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                type = 'text'
                name = 'item'
                onChange = {this.handleChanges}
                value = {this.state.keyword}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;