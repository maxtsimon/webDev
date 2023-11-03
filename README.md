# webDev
New Tech Presentation for CSCI 435

## Initial Requirements

- [node.js](https://nodejs.org/en/download)

1. Node.js requires some dependencies. The installer will offer to download all of these dependencies for you, or you can download them yourself (recommended) :

&emsp;&emsp; [PYTHON](https://www.python.org/downloads/)  
&emsp;&emsp; [VISUAL STUDIO BUILD TOOLS](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022) 

2. Download the version of node.js that matches your system's OS

3. Confirm that node.js directory is in your environment's PATH variable by running `npm -v` in the terminal

- [VScode](https://code.visualstudio.com/) or your IDE of choice

React App:

1. Open your terminal in the directory you would like to create your application

2. Run this command to create a React application named my-react-app: `npx create-react-app my-react-app`

3. `cd my-react-app`

4. `npm start`

If you get an error along the lines of `Plugin "react" was conflicted between`, open your my-react-app directory within your IDE and within package.json, delete

`"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },`

5. React should automatically open up your browser, but if not, head to `http://localhost:3000/` to see the default React web app


6. In the terminal, hit `CTRL + C` to terminate the program


7. Within the project directory, run `npm i axios` to install the axios package, which allows us to make HTTP requests in our web app

## Demo

This Demo asks you to use your understanding of React Hooks to create a basic web app that reports weather conditions of a user-specified location. As you work through the demo, you will be able to type into the search bar at the top of the screen and trigger an API call with the `ENTER` key. The API call will populate the screen with response data from the GET request. Out of the box, this functionality does not work.

1. Within your newly created React app, replace your `App.js` and `index.css` files with the files in this repository

2. Work on filling in the missing code snippets in `App.js` (indicated by the comments) while your app is running to gauge your accuracy

3. Submit to Alejandro a screenshot of the webpage with the following conditions:

    - The web app displays six metrics
          1. Location
          2. Temperature
          3. Description
          4. Feels Like
          5. Humidity
          6. Wind Speed
      
      - The screenshot contains weather information for any location other than Miami
     
      - All numbers displayed by the web app are whole numbers (no decimal points)
       

 
