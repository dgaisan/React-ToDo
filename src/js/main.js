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
        return {items: []};
    },

    handleClick: function() {
        var newTask =
            this.refs['newTask'].getDOMNode().value;
        if (newTask) {
            var updatedItems = this.state.items.concat([newTask]);
            this.setState(updatedItems);
            this.cleanUpTextField();
        }
    },

    cleanUpTextField: function() {
        this.refs['newTask'].getDOMNode().value = '';
    },

    render: function() {
        return (
            <div>
                <TodoItems items={this.state.items} />
                <input type="text" ref='newTask' />
                <button onClick={this.handleClick}>Add Task</button>
            </div>
        );
    }
});

React.render(
    <TodoApp />,
    document.getElementById('main')
);