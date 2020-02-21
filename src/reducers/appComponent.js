import {
  ADD_TODO_IN_STATE,
  DELETE_TODO_IN_STATE,
  EDIT_TODO_IN_STATE,
  ADD_SUB_TODO_IN_STATE,
  DELETE_SUB_TODO_IN_STATE,
  EDIT_SUB_TODO_IN_STATE
} from "../actions/appAction";

const initialState = {
  todos: [{
    onEdit: false,
    inputValue: 'Add TODO, if you want',
    id: 7777,
    checked: false,
    isSubInputVisible: false,
  }],
  searchInputValue: '',
  isSearchInvisible: false,
  subItems: {
    7777: [{
      onEdit: false,
      inputValue: 'And Add sub_TODO, if you want',
      id: 6666,
      checked: false,
      isSubInputVisible: false
    }]
  }
};

export function dataReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_IN_STATE:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO_IN_STATE:
      return {
        ...state,
        todos: [...state.todos].filter(param => action.payload !== param.id)
      };
    case EDIT_TODO_IN_STATE:
      return {
        ...state,
        todos: state.todos.map(param => param.id === action.payload.id ? {...action.payload} : param)
      };
    case ADD_SUB_TODO_IN_STATE:
      console.log(action, 'add_sub')
      return {
        ...state,
        subItems: {
          ...state.subItems,
          [action.payload.id]: [
            ...state.subItems[action.payload.id],
            action.payload.item
          ]
        }
      };
    case DELETE_SUB_TODO_IN_STATE:
      console.log(action, 'del_sub')
      return {
        ...state,
        subItems: {
          ...state.subItems,
          [action.payload.parentId]: state.subItems[action.payload.parentId].filter(item => action.payload.id !== item.id)
        }
      };
    case EDIT_SUB_TODO_IN_STATE:
      console.log(action, 'edit_sub')
      return {
        ...state,
        subItems: {
          ...state.subItems,
          [action.payload.parentId]: state.subItems[action.payload.parentId].map(param => {
            return param.id === action.payload.item.id ? {...action.payload.item} : param;
          })
        }
      };
    default:
      return state;
  }
}
