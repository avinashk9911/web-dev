const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob','kevin',Dave];
        const int = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
        return names[int]; // Return a random name from the array
    }

    return(
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}
export default Content;