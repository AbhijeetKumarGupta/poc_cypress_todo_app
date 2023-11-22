import { ISetStateOptions, IStore, ITodoItem } from "../../types/types";

const initialState: IStore = {
  todoData: [] as Array<ITodoItem>,
  backupTodo: [] as Array<ITodoItem>
};

const setState = (state = initialState, { type, payload } : ISetStateOptions) => {
  switch (type) {
    case "SET-TODO-DATA":
      return { ...state, todoData: payload };
    case "SET-BACKUP-TODO-DATA":
      return { ...state, backupTodo: payload };
    case "REMOVE-DATA-FROM-LIST":
      const remaining = state?.todoData.filter(
        (item: ITodoItem) => Number(item?.id) !== Number(payload)
      )
      return {...state, todoData: remaining, backupTodo: remaining};
    case "ADD-DATA-TO-LIST":
      const newAdded = [payload, ...(state?.todoData||[])]
      return{ ...state, todoData: newAdded, backupTodo: newAdded}
    case "MARK-AS-DONE":
      const updatedDoneDataTD = [...state?.todoData].map(
        (item: ITodoItem) => {
          if(Number(item?.id) === Number(payload)){
            item.completed = true
          }
          return item
        }
      )
      const updatedDoneDataBTD = [...state?.backupTodo].map(
        (item: ITodoItem) => {
          if(Number(item?.id) === Number(payload)){
            item.completed = true
          }
          return item
        }
      )
      return {...state, todoData: updatedDoneDataTD, backupTodo: updatedDoneDataBTD}
    case "MARK-AS-OPEN":
      const updatedOpenDataTD = [...state?.todoData].map(
        (item: ITodoItem) => {
          if(Number(item?.id) === Number(payload)){
            item.completed = false
          }
          return item
        }
      )
      const updatedOpenDataBTD = [...state?.backupTodo].map(
        (item: ITodoItem) => {
          if(Number(item?.id) === Number(payload)){
            item.completed = false
          }
          return item
        }
      )
      return {...state, todoData: updatedOpenDataTD, backupTodo: updatedOpenDataBTD};

    default:
      return state;
  }
};

export default setState;
