import './index.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { NewTask } from './components/NewTask/NewTask';

function App() {
  return (
    <>
      <h1 className='main-title'>Task Generator</h1>
      <hr />      
      <div className='App'>        
          <NewTask />        
      <div className='tasks-list'>
        <TodoCounter />      
        <TodoList />
        </div>
      </div>    
    </>
  );
}

export default App;
