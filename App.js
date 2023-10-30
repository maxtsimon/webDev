import './App.css';
import { useState } from 'react';

function App() {

  /* 
  
  API Demo 

     In this example, we use a button to make an HTTP Get Request that updates the state variables of the webpage
     The webpage re-renders any HTML elements dependent on the state variable when the state variable changes

     quote is the current state and setQuote is a function that updates the state
     Since there should not be a quote when the webpage loads, the current state is an empty string */

  const [quote, setQuote] = useState("")
  
  // TODO: add another state to the webpage to store the author information

  const GetQuote = () => {
  
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        setQuote(data.content)
        // TODO: use your setAuthor function to assign "data.author" to your author state
      })
  }

  return (
    <div id='main-page'>
      <h1>API Demo</h1>
      <button id='quote-button' onClick={GetQuote}>Get Quote</button>
      <p>Quote: {quote}</p>
      {/* TODO: create an html element for author, similar to quote, using the author state variable you declared above */}
      <h1>Button Demo</h1>
      <MyButton />
      <h1>List Demo</h1>
      <ShoppingList />
      <h1>Form Demo</h1>
      <p>Right-click on the page and choose the inspect option at the bottom to open the console and view your login info after submitting</p>
      <LoginPage />
      <h1>Link Demo</h1>
      <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click Here!</a>
    </div>
)}

/* To make sure your code works, press the Get Quote button to populate the screen with a random quote and it's author

Button Demo */

function MyButton() {

  // TODO: create a state called count with a setter function called setCount and initialize the state with useState(0)

  const handleClick = () => {
    // TODO: use the setCount function to increment the current value of count by 1
  }

  return (
    <button id='count-button' onClick={handleClick}>
      Clicked count times
      {/* TODO: place curly braces around count to replace the text with the current value of your count state */}
    </button>
  );
}

/* To make sure your code works, make sure that as you click the button, the button tells you how many times it has been clicked 

List Demo */

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
  /* TODO: add two more elements to this array such that one is a fruit and the other is not */
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

/* To make sure your code works, make sure the elements you added appear on the list and that your fruit element is magengta and the other is darkgreen

Form Demo */

function LoginPage() {
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Email" />
        {/* TODO: create an HTML element for users to input a password */}
        {/* HINT: The implementation should be very similar to username, but of type "password" so that user input appears as dots */}
        <button id='submit-button' type="submit">Login</button>
      </form>
    </div>
  );
};

/* To make sure your code works, check that the form has two boxes, one with a placeholder that says email and the other password 
   When you hit the Login button, make sure to check the console log and check that the username and password that appear there match what was submitted*/

export default App;
