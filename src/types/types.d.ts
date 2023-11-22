export interface ITodoItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
    isDummy?: boolean
}

export interface IStore {
    todoData: Array<ITodoItem>,
    backupTodo: Array<ITodoItem>
}

export interface ISetStateOptions {
    type: string, 
    payload: any
}

export interface ICard {
    data: ITodoItem
}
