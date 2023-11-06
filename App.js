import React from 'react'
// TODO: Uncomment the import statement below
// import useState from 'react'
import axios from 'axios'

function App() {

/* 
  useState is a React Hook that allows you to add a state to a functional component. 
  It returns an array with two values: the current state and a function to update it. 
  The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. 
   
  It can be used like this:
  const [state, setState] = useState(initialValue);
*/

// TODO: create two states with the following conditions
// 1. a variable called data, initialzed as "{}"
// 2. a variable called location, initialized as an empty string

// TODO: delete the constant variables data and location declared below as they are placeholders (DO NOT DELETE URL)

  const data = {
    "coord": {
        "lon": -80.1937,
        "lat": 25.7743
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 80.64,
        "feels_like": 83.41,
        "temp_min": 78.01,
        "temp_max": 82.99,
        "pressure": 1020,
        "humidity": 66
    },
    "visibility": 10000,
    "wind": {
        "speed": 23.02,
        "deg": 60,
        "gust": 34.52
    },
    "clouds": {
        "all": 75
    },
    "dt": 1699027529,
    "sys": {
        "type": 2,
        "id": 2009435,
        "country": "US",
        "sunrise": 1699011015,
        "sunset": 1699051100
    },
    "timezone": -14400,
    "id": 4164138,
    "name": "Miami",
    "cod": 200
  }

  const location = "Miami"

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  /*
    Axios is a JavaScript library that uses the Promise API to create HTTP requests.
    Promises are essentially a way of handling asynchronous operations and typically require handlers depedning on whether the promise is fulfilled or not.
    To work these into the React lifecycle, we can use the useState hook to store the result of the promise when it is resolved and re-render the component.

    The .then() function will run when the promise resolves.
    If the API call is successful, the program will enter the .then() block
    If the API call is unsuccessful, the program will enter the .catch() block
  */

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
          .then(response => {
              // TODO: use the data setter function with the argument "response.data"
              console.log(response.data);
          }).catch(err => {
              alert("Invalid Location");
              console.log(err);
          });
          // TODO: once the data has been set, the search bar can be reset by changing the value of location with the setter function to an empty string
      }
    }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}

          /* 
            In React, onChange events are triggered whenever the value of an input element changes. 
            For example, when a user types in a text field, an onChange event is fired, and the value of the text field is updated. 
            This allows you to respond to changes in the input and take action accordingly, such as updating the state of your React component or sending an API request.

            It can be used like this:
            onChange={event => functionCall(args)}
          */

          // Any time the text within the search bar changes, we need to handle that change
          // TODO: implement the onChange attribute of the input
          // HINT: event.target returns the react element where the change occurred, so we want to set the location to event.target.value  

          onKeyDown={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>


      {/* Below is an example of the object notation of the data variable */}
      {/* TODO: Fill in the blanks based on the JSON format of the data (commented out below) and the class name / text of each div element  */}
      
      {/* HINT: to access the attributes of a JSON object, use "." Ex: data.main.pressure would display 1020 on the screen */ }
      {/* HINT: use the function toFixed() to display numbers with a fixed number of decimal places */}

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{/* BLANK */}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{/* BLANK */}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{/* BLANK */}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{/* BLANK */} MPH</p> : null}
              <p>Wind Speed</p>
            </div>

            {/* TODO: Create one more div element for pressure (aka atmospeheric pressure) measured in hPa */}
            {/* HINT: Use the other div elements as inspiration and check that data.main exists to access the pressure value */ }

          </div>
        }



      </div>
    </div>
  );
}

export default App;

// const data = {
//   "coord": {
//       "lon": -80.1937,
//       "lat": 25.7743
//   },
//   "weather": [
//       {
//           "id": 803,
//           "main": "Clouds",
//           "description": "broken clouds",
//           "icon": "04d"
//       }
//   ],
//   "base": "stations",
//   "main": {
//       "temp": 80.64,
//       "feels_like": 83.41,
//       "temp_min": 78.01,
//       "temp_max": 82.99,
//       "pressure": 1020,
//       "humidity": 66
//   },
//   "visibility": 10000,
//   "wind": {
//       "speed": 23.02,
//       "deg": 60,
//       "gust": 34.52
//   },
//   "clouds": {
//       "all": 75
//   },
//   "dt": 1699027529,
//   "sys": {
//       "type": 2,
//       "id": 2009435,
//       "country": "US",
//       "sunrise": 1699011015,
//       "sunset": 1699051100
//   },
//   "timezone": -14400,
//   "id": 4164138,
//   "name": "Miami",
//   "cod": 200
// }
