/**
 * Created by Dmitri on 12/11/2014.
 */

var React = require('react');

var TodoItems = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.items.map(function(item, i) {
                    return (
                        <li key={i}>{item}</li>
                    );
                })}
            </ul>
        );
    }
});

var TodoApp = React.createClass({

    getInitialState: function() {
        console.log('initialState');

        return {items: []};
    },

    handleClick: function(e) {
        console.log('handleClick');
        var newTask = document.getElementById('task').value;
        if (newTask) {
            this.state.items.push(newTask);
            this.setState(this.state.items);
            this.cleanUpTextField();
        }
    },

    cleanUpTextField: function() {
        document.getElementById('task').value = '';
    },

    render: function() {
        console.log('rendering');

        return (
            <div>
                <TodoItems items={this.state.items} />
                <input type="text" name='task' id='task' />
                <button onClick={this.handleClick}>Add Task</button>
            </div>
        );
    }
});

React.render(
    <TodoApp name='You' />,
    document.getElementById('main')
);