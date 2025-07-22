import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {

  const [items, setItems] = useState([
    { id: 1, checked: true, item: "One half kg of potatoes" },
    {id: 2, checked: false, item: "One kg of tomatoes" },
    {id: 3, checked: false, item: "One kg of onions"}
  ]);


  const handleCheck = (id) => {
    console.log(`key: ${id}`) // on console we can see which check box has been selected by the help of onChange property in input checkbox

    // now using this line of code we can enable the check and uncheck of the checkbox
    const listItems = items.map((item) => item.id == id ? {...item, checked: !item.checked} : item);

    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

  const handleDelete = (id) => {
    console.log(id)
    const listItems = items.filter((item) => item.id !==id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }


    return (

        <main>
            {items.length? (
              <ul>
                {items.map((item) => (
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
                        />
                  </li>
                ))}
              </ul>
            ): (
                  <p style = {{marginTop: '2rem'}} >Your list is empty</p>
                  // to show up the text when the list is empty
                )
          }
        </main>
    )
}

export default Content;