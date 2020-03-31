import React, {useEffect} from 'react';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {repository} from "./repository";
import {connect} from "react-redux";
import {newTodoList, newTodoLists} from "../../../../redux/reducers/todoLists";

const MainTodoList = ({todolists, newTodoList, newTodoLists}) => {

  const saveState = () => {
    repository.saveTodolists(todolists)
  };
  const restoreState = () => {
    const todolists = repository.getTodolists();
    if (todolists != null) {
      newTodoLists(todolists)
    }
  };
  useEffect(() => {
    restoreState()
  }, []);

  useEffect(() => {
    saveState()
  }, [todolists]);

  const addItem = (newTitle) => {
    newTodoList(newTitle);
  };

  const tl = todolists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title}/>);
  return (
    <>
      <div>
        <AddNewItemForm addItem={addItem}/>
      </div>
      <div className='app-inner'>
        {tl}
      </div>
    </>
  )

}

const mapStateToProps = ({todoLists}) => ({
  todolists: todoLists.todolists,
});

export default connect(mapStateToProps, {newTodoList, newTodoLists})(MainTodoList);

