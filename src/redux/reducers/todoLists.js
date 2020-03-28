const initialState = {
  todolists: [],
  todolistsId: 0,
  tasks: [],
  filterValue: 'All',
  newTaskId: 0,
};

const TodoLists = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW-TODO-LIST':
      return {
        ...state, todolists: [...state.todolists, {id: state.todolistsId+1, title: action.title}]
      };

    default: return state
  }
};

export const newTodoList = (title) => ({type: 'NEW-TODO-LIST', title});

export default TodoLists