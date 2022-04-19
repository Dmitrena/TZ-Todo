import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/todoSlice";
import {ButtonContainer, HeroButton} from "./styles/InputStyles";

const AddTodoForm = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTodo({
            title: value,

        }))
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Enter todo here'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            ></input>
            <ButtonContainer>
            <HeroButton type='submit'>
                Submit
            </HeroButton>
            </ButtonContainer>
        </form>
    );
};

export default AddTodoForm;