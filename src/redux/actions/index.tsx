import { ITodoItem } from "../../types/types";

export const setTodoData = (payload: Array<ITodoItem>) => ({
  type: "SET-TODO-DATA",
  payload,
});
export const setBackupTodoData = (payload: Array<ITodoItem>) => ({
  type: "SET-BACKUP-TODO-DATA",
  payload,
});
export const addTodoData = (payload: ITodoItem) => ({
  type: "ADD-DATA-TO-LIST",
  payload,
});
export const removeDataFromTodo = (payload: number) => ({
  type: "REMOVE-DATA-FROM-LIST",
  payload,
});
export const markAsDone = (payload: number) => ({
  type: "MARK-AS-DONE",
  payload,
});
export const markAsOpen = (payload: number) => ({
  type: "MARK-AS-OPEN",
  payload,
});
