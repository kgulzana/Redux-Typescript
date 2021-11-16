import { TodoAction, TodoActionType } from "../../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionType.FETCH_TODOS });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _page: page, _limit: limit } }
      );
      setTimeout(() => {
        dispatch({
          type: TodoActionType.FETCH_TODOS_SUCCESS,
          payload: data,
        });
      }, 500);
    } catch (error) {
      dispatch({
        type: TodoActionType.FETCH_TODOS_FAIL,
        payload: "Произошла ошибка при загрузке пользователей!",
      });
    }
  };
};

export function setTodoPage(page: number): TodoAction {
  return { type: TodoActionType.SET_TODO_PAGE, payload: page };
}
