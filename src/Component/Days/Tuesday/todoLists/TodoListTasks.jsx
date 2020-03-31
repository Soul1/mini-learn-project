import React from 'react'
import TodoListTask from "./TodoListTask";
import PropTypes from 'prop-types';

const TodoListTasks = ({tasks, changeStatus, changeTitle}) => {

    let tasksElements =
      tasks.map(task => <TodoListTask
          key={task}
          task={task}
          changeStatus={changeStatus}
          changeTitle={changeTitle}
        />);

    return (
      <div className="todoList-tasks">
        {tasksElements}
      </div>
    )

};

export default TodoListTasks;


TodoListTasks.propTypes = {
  title: PropTypes.string,
  isDone: PropTypes.bool,
  priority: PropTypes.string,
};

