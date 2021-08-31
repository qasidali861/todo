const ListItem  = (props) => {

    const {todo, deleteItem, idx, completeMsg} = props
    
    return (
        <>
        
        <li   className={todo.isDone ? 'checked' : ''} onClick = {() => completeMsg(idx) } >{todo.msg}
        <span className="close" onClick={() => deleteItem(idx)}>x</span>
        </li>

        {/* <li>Hit the gym</li>
        <li className="checked">Pay bills</li>
        <li>Meet George</li>
        <li>Buy eggs</li>
        <li>Read a book</li>
        <li>Organize office</li> */}
   

        </>
      );
}
 
export default ListItem;