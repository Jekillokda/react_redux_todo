import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_TASK } from "../actions/actionTypes"; 
const initialState = {
    tasks: [{id:0, text: "123", isCompleted:false},{id:1, text: "234", isCompleted:false}]
  };
const RootReducer = (state = initialState, action) => {
    let listCopy = [];
    if (action)
    switch (action.type) {
        case ADD_TASK: {
            const { id, content } = action.payload;
            listCopy = state.tasks.slice()
            const a = { id: id, text:content, isCompleted: false }
            listCopy.push(a)
            return {...state, tasks: listCopy};
        }
        case DELETE_TASK:{
            const { id } = action.payload;
            listCopy = state.tasks.slice().filter(x=> x.id !==id)
        return {...state, tasks: listCopy};
        }
        case COMPLETE_TASK:{
            const { id } = action.payload;
            listCopy = state.tasks.slice();
            listCopy[id].isCompleted = !listCopy[id].isCompleted 
            return {...state};
            }
        case CHANGE_TASK:{
            const { id, content } = action.payload;
            listCopy = state.tasks.slice();
            listCopy[id].text = content
            return {...state, tasks: listCopy};
            }
      default:
      return state;
    }
}
export default RootReducer;