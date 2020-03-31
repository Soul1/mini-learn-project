const initialState = {
  tasks: [],
  filterValue: 'All',
  newTaskId: 0,
  newTasksId: 0,
};

const TodoList = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW-TASK':
      return {
        ...state,
        tasks: [...state.tasks,
          {id: state.newTaskId, title: action.title,
            isDone: false, priority: 'low'}],
        newTaskId: state.newTaskId + 1
      };
    case 'NEW-TASKS':
      return {
        ...state,
        tasks: [...action.tasks],
        newTasksId: action.tasks.length
      };

    case 'NEW-FILTER-VALUE':
      return {
        ...state, filterValue: action.value
      };

    default:
      return state
  }
};

export const newTask = (title) => ({type: 'NEW-TASK', title});
export const newTasks = (tasks) => ({type: 'NEW-TASKS', tasks});
export const newFilterValue = (value) => ({type: 'NEW-FILTER-VALUE', value});

export default TodoList