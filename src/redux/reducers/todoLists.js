const initialState = {
  todolists: [],
  todolistsId: 0,
};

const TodoLists = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW-TODO-LIST':
      return {
        ...state,
        todolists: [...state.todolists, {id: state.todolistsId, title: action.title}],
        todolistsId: state.todolistsId + 1
      };
    case 'NEW-TODO-LISTS':
      return {
        ...state, todolists: [...state.todolists, ...action.newTodoLists], todolistsId: action.newTodoLists.length
      };
    default:
      return state
  }
};

export const newTodoList = (title) => ({type: 'NEW-TODO-LIST', title});
export const newTodoLists = (newTodoLists) => ({type: 'NEW-TODO-LISTS', newTodoLists});

export default TodoLists