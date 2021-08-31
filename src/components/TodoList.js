import ListItem from "./ListItem";

const ToDoList = (props) => {
    const {todos, deleteItem,completeMsg} = props
    return ( 
        <>
        <ul id="myUL">
        {todos.map((todo, key) => <ListItem key={key} idx={key} todo={todo} deleteItem={deleteItem} completeMsg={completeMsg} /> )}
            
        </ul>
        </>
     );
}
 
export default ToDoList;