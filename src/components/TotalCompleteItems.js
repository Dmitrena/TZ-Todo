import React from 'react';
import {useSelector} from 'react-redux';
import {Counter} from "./styles/InputStyles";

const TotalCompleteItems = () => {
    const completedTodos = useSelector((state) => state.todos.filter((todo) =>todo.completed ===true))
    return <Counter>Todos({completedTodos.length})</Counter>;
};

export default TotalCompleteItems;