import React, { Component } from 'react';
import {addTodo} from '../redux/actions/index';
import {connect} from 'react-redux';
class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
    this.onchangeTodo = this.onchangeTodo.bind(this);
  }

  onchangeTodo(e){
    this.setState({text: e.target.value})
  }

  render() {
    return (
        <div className="add-todo-card">
          <div className="input-todo">
            <div className="icon"><i className="fa fa-book"></i></div>
            <input type="text" placeholder="Input todo here" onChange={this.onchangeTodo} />
          </div>
          <button className="btn-add-todo" onClick={() => this.props.addTodo(this.state.text)}>Add item</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
})
export default connect(null,mapDispatchToProps)(AddTodo);