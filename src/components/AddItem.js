import { useState } from "react";

const AddItem = (props) => {
    const [Item, setItem] = useState('');
    const getInputValue = () => {
        props.getItem(Item);
    }
    return (   
        <>
        <input type="text" value = {Item} id="myInput" placeholder="Title..." 
        onChange = {(e) => setItem(e.target.value)}/>
        <span onClick={() => getInputValue()} className="addBtn">Add</span>
        </>
     );
}
 
export default AddItem;
