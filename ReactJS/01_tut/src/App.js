import logo from './logo.svg';
// import './App.css';
import Header from './Header'; // Importing the Header component
import Content from './Content'; // Importing the Content component
import Footer from './Footer';

function App() {

  const name = "Aravind";

  const handleNameChange = () => {
    const names = ["Aman", "Rohan", "Shubham", "Sahil"];
    const randomIndex = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    return names[randomIndex]; // Return a random name from the array
  }


  return (

    <div className="App">

      <Header/> {/* Using the Header component here */}
      <Content/> {/* Using the Content component here */}
      <Footer/> {/* Using the Footer component here */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see the changes.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1>Hello {name}!</h1>  {/*// here I have added a text and a javascript variable.*/}

        <h2>Hello {handleNameChange()}</h2> {/* I have used a custom component */}

        

      </header>
    </div>
  );
}

export default App;
