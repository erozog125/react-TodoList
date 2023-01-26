import React from 'react';
import { ImageTask } from '../ImageTask/ImageTask';
import './newTask.css';

export const NewTask = () => {

  return (
    <div className='new-task-component'>
      <h2 className='h2-new-task'>Create New Task</h2>
      <form onSubmit={e=>e.preventDefault()} action="">
        <label htmlFor="">Insert a new task</label>
        <input type="text" name="" id="" placeholder='take a breakfast' />
        <button className="btn-create-task">Create Task</button>                
      </form>      
    </div>
  )    
}

