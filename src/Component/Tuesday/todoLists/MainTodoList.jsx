import React from 'react';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {repository} from "./repository";
import {connect} from "react-redux";
import {newTodoList} from "../../../redux/reducers/todoLists";

class MainTodoList extends React.Component {
  saveState = () => {
    repository.saveTodolists(this.props.state)
  };
  restoreState = () => {
    let todolists = repository.getTodolists();
    if(todolists != null ){
      newTodoList(todolists)
    }
  };

  componentDidMount() {
    this.restoreState()
  }
  addItem = (newTitle) => {
    this.props.newTodoList(newTitle);
    this.saveState()
  };
  render = () => {
    const todolists = this.props
      .todolists
      .map(tl => <TodoList id={tl.id} title={tl.title}/>);
    return (
      <>
        <div>
          <AddNewItemForm addItem={this.addItem}/>
        </div>
        <div className='app-inner'>
          {todolists}
        </div>
      </>
    )
  }
}

const mapStateToProps = ({todoLists}) => ({
  todolistsId: todoLists.todolistsId,
  todolists: todoLists.todolists,
  state: todoLists,
});

export default connect(mapStateToProps,{newTodoList}) (MainTodoList);

