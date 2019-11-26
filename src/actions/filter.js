import * as actionTypes from './actionTypes'
const POSITIVE = 'positive';
const NEGATIVE = 'negative';
const NONE = '';

const filterAction = {}

filterAction.filter = (data={})  => {
  const {name, status, priority, listTodo} = data;
  return {
    type: actionTypes.GET_SEARCH_ITEMS,
    data: {
      name: name,
      status: status,
      priority: priority,
      listTodo: listTodo
    }
  }
};

export default filterAction