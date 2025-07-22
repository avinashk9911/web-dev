import { FaTrashAlt } from 'react-icons/fa';

const LineItems = ({item, handleCheck, handleDelete}) => {
    return(
        <li className='item' key = {item.id}>
            <input 
                type='checkbox'
                onChange={() => handleCheck(item.id)} // on console we can see which check box has been selected
                checked= {item.checked} // this will see the checked property of items and if it is false, the output checkbox will not be selected. so we have made first tiem's checked: ture
            />
            <label
                style = {(item.checked) ? {textDecoration: 'line-through'}:null} // if we select any item, there will be a single line drown from the text
                onDoubleClick={() => handleCheck(item.id)} // so if the user double clicks on to the lable or text, the checkbox will be selected
            >{item.item}</label>
            <FaTrashAlt 
                onClick={() => handleDelete(item.id)} // used to delete an item form the list
                role='button' 
                tabIndex={"0"}
                aria-label={`Delete &{item.item}`}
            />
        </li>
    )
}

export default LineItems