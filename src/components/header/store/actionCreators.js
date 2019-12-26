import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
  type: SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: SEARCH_BLUR
})

const changeList = (data) =>({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const mouseEnter = () =>({
  type: MOUSE_ENTER,
})

export const mouseLeave = () =>({
  type: MOUSE_LEAVE,
})

export const changePage = (page) =>({
  type: CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('api/headerList.json').then((res)=>{
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(()=>{
      console.log('error')
    })
  }
}