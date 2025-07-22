import { useState } from 'react';

const Content = () => {

  const [name, setName] = useState("Aman");
  const [count, setCount] = useState(0);

    const handleNameChange1 = () => {
    const names = ["Aman", "Rohan", "Shubham", "Sahil"];
    const randomIndex = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    //return names[randomIndex]; // Return a random name from the array
    setName(names[randomIndex])
  }

  const handleClick = () => {
    console.log("Button Clicked")
  }

  const handleClick1 = () => {
    setCount(count + 1)
    console.log(count)
  }
  const handleClick2 = (name) => {
    console.log(`${name} Button Clicked`)
  }
  const handleClick3 = (e) => {
    console.log(e)
    console.log(e.target) // o/p: <button>Click It 3</button>
    console.log(e.target.innerText) //o/p: Click It 3
  }
    return (

        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>

            <button onClick = {handleClick1}>count</button>
            <button onClick = {handleNameChange1}>Click Name</button>
            <button onClick = {() => handleClick2('Dave')}>Click It 2</button>
            <button onClick = {(e) => handleClick3(e)}>Click It 3</button>
        </main>
    )
}

export default Content;