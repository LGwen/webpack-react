import { combineReducers } from 'redux'
import textVale from './textVale';
import todoList from './todoList'

export default combineReducers({
    textVale,todoList
})