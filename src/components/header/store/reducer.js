import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  mouse: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type){
    case SEARCH_FOCUS:
      return state.set('focus',true)
    case SEARCH_BLUR:
      return state.set('focus',false)
    case CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case MOUSE_ENTER:
      return state.set('mouse',true)
    case MOUSE_LEAVE:
      return state.set('mouse',false)
    case CHANGE_PAGE:
      return state.set('page',action.page)
    default:
      return state;
  }
}