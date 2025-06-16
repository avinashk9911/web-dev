const Content = () => {

    const handleNameChange1 = () => {
    const names = ["Aman", "Rohan", "Shubham", "Sahil"];
    const randomIndex = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    return names[randomIndex]; // Return a random name from the array
  }
    return (

        <main>
            Hello {handleNameChange1()}!
        </main>
    )
}

export default Content;