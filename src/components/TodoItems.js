import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleComplete,deleteTodo} from "../redux/todoSlice";
import {Todo} from "./styles/InputStyles";

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch()

    const handleCompleteClick = () => {
        dispatch(toggleComplete({
            id:id,
            completed:!completed
        }))
    }

    const handleDeleteClick = () => {
        dispatch(deleteTodo({id:id}))
    }

    return (
        <Todo>
            <div >
				<span>
					<input type='checkbox' className='mr-3' checked={completed} onChange={handleCompleteClick}></input>
                    {title}
				</span>
                <button onClick={handleDeleteClick} >Delete</button>
            </div>
        </Todo>
    );
};

export default TodoItem;