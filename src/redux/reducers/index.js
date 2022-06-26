import todoReducer from './todo-reducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({todoReducer});
export default rootReducer;