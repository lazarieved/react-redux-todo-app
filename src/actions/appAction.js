export const ADD_TODO_IN_STATE = 'ADD_TODO_IN_STATE';
export const DELETE_TODO_IN_STATE = 'DELETE_TODO_IN_STATE';
export const EDIT_TODO_IN_STATE = 'EDIT_TODO_IN_STATE';
export const ADD_SUB_TODO_IN_STATE = 'ADD_SUB_TODO_IN_STATE';
export const DELETE_SUB_TODO_IN_STATE = 'DELETE_SUB_TODO_IN_STATE';
export const EDIT_SUB_TODO_IN_STATE = 'EDIT_SUB_TODO_IN_STATE';

export function addToDoInState(item) {
  return dispatch => {
    dispatch({
      type: ADD_TODO_IN_STATE,
      payload: item,
    })
  }
}

export function deleteToDoState(item) {
  return dispatch => {
    dispatch({
      type: DELETE_TODO_IN_STATE,
      payload: item,
    })
  }
}

export function editToDoItem(item) {
  return dispatch => {
    dispatch({
      type: EDIT_TODO_IN_STATE,
      payload: item,
    })
  }
}

export function addSubItem(id, item) {
  return dispatch => {
    dispatch({
      type: ADD_SUB_TODO_IN_STATE,
      payload: {id, item},
    })
  }
}

export function deleteSubItemsState(id, parentId) {
  return dispatch => {
    dispatch({
      type: DELETE_SUB_TODO_IN_STATE,
      payload: {id, parentId},
    })
  }
}

export function editSubItem(item, parentId) {
  return dispatch => {
    dispatch({
      type: EDIT_SUB_TODO_IN_STATE,
      payload: {item, parentId},
    })
  }
}

