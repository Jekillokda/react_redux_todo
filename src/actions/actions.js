import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_TASK } from "./actionTypes"; 

let nextTodoId = 1;

export const addTask = content => ({
    type: ADD_TASK,
    payload: {
      id: ++nextTodoId,
      content
    }
});
  
export const deleteTask = id => ({
   type: DELETE_TASK,
   payload: { id }
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  payload: { id }
});

export const changeTask = (id,content) => ({
  type: CHANGE_TASK,
  payload: { 
      id, 
      content
    }
});
  
