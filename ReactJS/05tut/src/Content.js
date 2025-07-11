const Content = () => {

    const handleNameChange1 = () => {
    const names = ["Aman", "Rohan", "Shubham", "Sahil"];
    const randomIndex = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    return names[randomIndex]; // Return a random name from the array
  }

  const handleClick = () => {
    console.log("Button Clicked")
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
                Hello {handleNameChange1()}!
            </p>
            

            <button onClick = {handleClick}>Click It 1</button>
            <button onClick = {() => handleClick2('Dave')}>Click It 2</button>
            <button onClick = {(e) => handleClick3(e)}>Click It 3</button>
        </main>
    )
}

export default Content;