const initialState = {
  namesMyFriends: ['ddddd'],
};


const namesMyFriends = (state=initialState, action) => {
  switch (action.type) {
    case 'SET-NEW-NAME-FRIEND':
      return {...state, namesMyFriends: [...namesMyFriends, action.payload]};
    default:
      return state
  }

};

export const setNewName = (payload) => ({type: 'SET-NEW-NAME-FRIEND', payload});

export default namesMyFriends;