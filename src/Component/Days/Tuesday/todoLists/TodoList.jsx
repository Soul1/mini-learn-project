import React, {useEffect} from 'react';
import TodoListTitle from './TodoListTitle';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';
import AddNewItemForm from "./AddNewItemForm";
import {repository} from "./repository";
import {connect} from "react-redux";
import {newTask, newTasks, newFilterValue} from "../../../../redux/reducers/todoList";


const TodoList = ({tasks, id, idTasks, newTask, newTasks, newFilterValue, filterValue, title}) => {


  const saveState = () => {
    repository.saveTasks(tasks, idTasks)
  };
  const restoreState = () => {
    // берет id и отдает saveState из-за этого и проблема, таски взаимосвязанны
    let tasks = repository.getTasks(idTasks);
    if (tasks != null) {
      newTasks(tasks)
    }
  };
  const addItem = (newText) => {
    newTask(newText)
  };
  useEffect(restoreState, []);
  useEffect(saveState, [tasks]);

  const changeFilter = (filterValue) => {
    newFilterValue(filterValue)
  };

  const changeTask = (task, obj) => {
    let tasks = tasks.map(t => {
      if (t === task) {
        return {...t, ...obj}
      } else {
        return t
      }
    });
    newTasks(tasks)
  };

  const changeStatus = (task, isDone) => {
    changeTask(task, {isDone})
  };

  const changeTitle = (task, title) => {
    changeTask(task, {title})
  };
  return (

    <div className="todoList" id={id}>
      <div className='todoList-header'>
        <TodoListTitle title={title}/>
        <AddNewItemForm addItem={addItem}/>
      </div>
      <TodoListTasks
        changeStatus={changeStatus}
        changeTitle={changeTitle}
        tasks={tasks.filter(t => {
          if (filterValue === 'All') {
            return true
          }
          if (filterValue === 'Completed') {
            return t.isDone === true;
          }
          if (filterValue === 'Active') {
            return t.isDone === false;
          }
        })}
      />
      <TodoListFooter changeFilter={changeFilter}
                      filterValue={filterValue}/>
    </div>
  )
};

const mapStateToProps = ({todoList}) => ({
  tasks: todoList.tasks,
  filterValue: todoList.filterValue,
  idTasks: todoList.newTasksId,
  idTask: todoList.newTaskId,
});

export default connect(mapStateToProps, {newTask, newTasks, newFilterValue})(TodoList);
