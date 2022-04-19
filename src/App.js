import AddTodoForm from "./components/AddForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import {Container, GlobalStyles} from "./globalStyles";

function App() {
    return (
        <Container>
            <GlobalStyles/>
            <TotalCompleteItems/>
            <AddTodoForm/>
            <TodoList/>

        </Container>
    );
}

export default App;
