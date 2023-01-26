import './index.css';
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoList } from "./components/TodoList/TodoList";
import { NewTask } from './components/NewTask/NewTask';
import { ImageTask } from './components/ImageTask/ImageTask';

function App() {
  return (
    <>
      <h1 className='main-title'>Task Generator</h1>
      <hr />      
      <div className='App'>
        <div className='.new-task-container'>
        <NewTask />
        <ImageTask />
        </div>
        <div className='tasks-list'>
          <TodoCounter />      
          <TodoList />
        </div>
      </div>    
    </>
  );
}

export default App;
