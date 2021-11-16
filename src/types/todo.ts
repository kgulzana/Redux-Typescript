export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}
export enum TodoActionType {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAIL = "FETCH_TODOS_FAIL",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}
interface FetchTodoAction {
  type: TodoActionType.FETCH_TODOS;
}
interface FetchTodoActionSuccess {
  type: TodoActionType.FETCH_TODOS_SUCCESS;
  payload: any;
}
interface FetchTodoActionFail {
  type: TodoActionType.FETCH_TODOS_FAIL;
  payload: string;
}
interface SetTodoPageAction {
  type: TodoActionType.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoActionSuccess
  | FetchTodoActionFail
  | SetTodoPageAction;
