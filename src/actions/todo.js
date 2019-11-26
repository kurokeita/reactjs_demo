import * as actionTypes from './actionTypes'

let nextTodoId = 21;

export function createTodo(todo) {
  return {
    type: actionTypes.CREATE_NEW_TODO,
    todo: {
      id: nextTodoId++,
      name: todo.name,
      status: todo.status,
      priority: todo.priority
    }
  }
}

export function editTodo(todo) {
  return {
    type: actionTypes.EDIT_TODO,
    todo: {
      id: todo.id,
      name: todo.name,
      status: todo.status,
      priority: todo.priority
    }
  }
}

export function deleteTodo(id) {
  return {
    type: actionTypes.DELETE_TODO,
    id
  }
}

export function filterTodo(data = {}) {
  const {name, status, priority} = data;
  return {
    type: actionTypes.GET_SEARCH_ITEMS,
    data: {
      name: name,
      status: status,
      priority: priority
    }
  }
};
