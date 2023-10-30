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

1. Open your terminal in the directory you would like to create your application.

2. Run this command to create a React application named my-react-app: `npx create-react-app my-react-app`

3. `cd my-react-app`

4. `npm start`

If you get an error along the lines of `Plugin "react" was conflicted between`, open your my-react-app directory within your IDE and delete

`"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },`

  from package.json

  ## Demo

  1. Within your newly created React app, replace your `App.js` and `App.css` files with the files in this repository.

  2. Work on filling in the missing code snippets (indicated by the comments) while your app is running to gauge your accuracy

  3. Submit to Alejandro a screenshot of the webpage with the following conditions:

     - API Demo section contains a random quote and it's associated author rendered to the screen
     - Button Demo button is labeled with "Clicked 5 times" as a result of clicking the button 5 times
     - List Demo list contains 5 elements of which two are magenta and three are dark green
     - Form Demo Form contains two input boxes, and both should be filled in with the appropriate information (your password will appear as dots)
