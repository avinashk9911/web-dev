import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer"
import { useState } from 'react';




function App() {

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
    <div className="App">
      <Header title= "Grocery List"/>
      <Content 
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}

      />
      <Footer length = {items.length}/>
      
    </div>
  );
}

export default App;