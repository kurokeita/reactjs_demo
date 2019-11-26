import * as actionTypes from '../actions/actionTypes';

const initial_state = {
  listTodo: [
    {id: 2, name: 'task1', status: 'positive', priority: 5},
    {id: 1, name: 'task2', status: 'positive', priority: 3},
    {id: 3, name: 'task3', status: 'positive', priority: 3},
    {id: 4, name: 'task4', status: 'positive', priority: 1},
    {id: 5, name: 'task5', status: 'positive', priority: 2},
    {id: 6, name: 'task6', status: 'positive', priority: 5},
    {id: 7, name: 'task7', status: 'positive', priority: 3},
    {id: 8, name: 'task8', status: 'positive', priority: 3},
    {id: 9, name: 'task9', status: 'positive', priority: 1},
    {id: 10, name: 'task10', status: 'positive', priority: 2},
    {id: 11, name: 'task11', status: 'positive', priority: 5},
    {id: 12, name: 'task12', status: 'positive', priority: 3},
    {id: 13, name: 'task13', status: 'positive', priority: 3},
    {id: 14, name: 'task14', status: 'positive', priority: 1},
    {id: 15, name: 'task15', status: 'positive', priority: 2},
    {id: 16, name: 'task16', status: 'positive', priority: 5},
    {id: 17, name: 'task17', status: 'positive', priority: 3},
    {id: 18, name: 'task18', status: 'positive', priority: 3},
    {id: 19, name: 'task19', status: 'positive', priority: 1},
    {id: 20, name: 'task20', status: 'positive', priority: 2},
  ]
}

const todo = (state = initial_state, action) => {
  const {type, todo} = action;
  switch (type) {
    case actionTypes.CREATE_NEW_TODO:
      state.listTodo.push({...todo});
      return {
        ...state
      };
    case actionTypes.EDIT_TODO:
      const {id} = todo;
      state.listTodo.map((data, index) => {
        if (data.id === parseInt(id)) {
          state.listTodo[index] = todo;
        }
      });
      return {
        ...state
      };
    case actionTypes.DELETE_TODO:
      state.listTodo.map((data, index) => {
        if (data.id === action.id) {
          console.log(data.id + " " + action.id)
          state.listTodo.splice(index, 1);
        }
      });
      return {
        ...state
      };

    default:
      return state
  }
};

export default todo
