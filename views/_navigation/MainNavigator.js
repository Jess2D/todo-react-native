import { createStackNavigator } from 'react-navigation'
import TodoListScreen from '../todo-list/TodoListScreen'

export default createStackNavigator(
    {
        TodoList: TodoListScreen,
    },

)