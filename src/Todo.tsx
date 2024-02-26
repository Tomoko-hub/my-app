import { FC } from 'react';
import { TodoType } from "./types/todo";

export const Todo:FC<Omit<TodoType, "id">> = (props) => {
    const {title, userId, completed = false} = props;
    const isTodoCompleted = completed ? "[DONE!]" : "[Not yet]";
    return(
        <p>{`${isTodoCompleted} ${title}, user: ${userId}`}</p>
    )
}

export default Todo;