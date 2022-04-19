import AddTodoForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import {GlobalStyles} from "./globalStyles";

function App() {
    return (
        <div>
            <GlobalStyles/>
            <TotalCompleteItems/>
            <AddTodoForm/>
            <TodoList/>

        </div>
    );
}

export default App;
