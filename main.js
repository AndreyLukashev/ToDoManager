import { INITIAL_STATE } from './src/constants/initialState';
import { TodoController } from './src/controllers/TodoController';
import { TodoModel } from './src/models/TodoModel';
import { TodoView } from './src/views/TodoView';
import './style.css';

const root = document.querySelector('#root');

// ContainerElements
const todoContainer = document.createElement('div');
// ContainerElements

root.append(todoContainer);

//================================================================

// Models
const todoModel = new TodoModel(INITIAL_STATE.tasks);
// Models

//=================================================================

// Views
const todoView = new TodoView(todoContainer, {todoModel});
// Views

//=================================================================

// Controllers
new TodoController({todoModel}, todoView);
// Controllers

//=================================================================