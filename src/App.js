import './App.css';
import AddTodo from './components/add_todo';
import TodoList from './components/todo_list';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './redux/reducers/index';
const store = createStore(rootReducer);
function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <AddTodo />
                <TodoList />
            </div>
        </Provider>
    )
}

export default App;