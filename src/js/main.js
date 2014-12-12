/**
 * Created by Dmitri on 12/11/2014.
 */

var React = require('react');

var TodoItems = React.createClass({

    /**
     * Invoking a callback(passed via props) in order to remove item from a 'model'
     * @param index item to be removed
     * @returns {function(this:TodoItems)}
     */
    handleDelete: function(index) {
        return function() {
            this.props.onDelete(index);
        }.bind(this);
    },

    render: function() {
        var onDelete = this.handleDelete;
        return (
            <ul>
                {this.props.items.map(function(item, i) {
                    return (
                        <li key={i}>
                            {item}
                            <button className="btn btn-danger" onClick={onDelete(i)}>x</button>
                        </li>
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
            this.setState({items: updatedItems});
            this.cleanUpTextField();
        }
    },

    cleanUpTextField: function() {
        this.refs['newTask'].getDOMNode().value = '';
    },

    /**
     * Removes an Item from a list of Items
     * @param index index or an item to be removed
     */
    handleDelete: function(index) {
        var updatedItems = this.state.items.splice(0);
        updatedItems.splice(index, 1);
        this.setState({items: updatedItems});
    },

    render: function() {
        return (
            <div>
                <TodoItems items={this.state.items} onDelete={this.handleDelete} />
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