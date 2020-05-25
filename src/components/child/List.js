import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, deteteItem } from '../../action';
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addItemText: "",
            todoList: []
        }
        this.props = props;
        const { dispatch } = this.props;
        this.dispatch = dispatch;
        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    componentWillUpdate(){
        console.log('component will update');
    }
    componentDidUpdate(){
        console.log('components did update');
    }
    componentWillReceiveProps(){
        console.log('components will receive props');
    }
    componentWillMount(){
        console.log('compnent will mount')
    }
    handleChange(event) {
        this.setState({
            addItemText: event.target.value
        })
    }
    addItem() {
        this.dispatch(addTodo(this.state.addItemText))
        this.setState({
            addItemText: ""
        })
        this.refs.input.value = "";
    }
    handleTodoItem(item) {
        this.dispatch(deteteItem(item.id));
    }
    render() {
        let todoList = this.props.todoList;
        let todoListEl = <div className="list-item" >...</div>;
        if (todoList) {
            todoListEl = todoList.map((t, index) => {
                return <div className="list-item" key={`index_${t.id}`}><span>{t.text}</span><div className="delete" onClick={this.handleTodoItem.bind(this, t)}>delete</div></div>
            })
        }
        return (
            <div className="list-container">
                <div className="input-container">
                    <input onChange={this.handleChange} ref="input" /><div className="add" onClick={this.addItem}>add</div>
                </div>
                <div className="list-wrap">
                    {todoListEl}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}
export default connect(mapStateToProps)(List);