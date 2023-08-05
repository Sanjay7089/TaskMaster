# Full Stack TaskMaster
https://master--charming-cupcake-a081c7.netlify.app/
### backend-api (with deployed config)-
https://github.com/Sanjay7089/TaskMasterApi

#### Feature 

-Add task, click to mark task as done
-check all the active and done task 
-Edit the task
-Remove all task

## Dependancy

The dependencies for each are listed below:

#### Frontend

- React
- react-dom
- react-scripts
- @mui/material
- axios
- redux
- see package.json on client folder

#### Backend

- Node js
- Express js
- mongoose(ODM)
- cors
- see remaining in server folder package.json
  
## Run on local machine

#### 1. Clone the git repository

```bash
git clone https://github.com/Sanjay7089/TaskMaster.git
```

#### 2. Install required packages for backend and frontend and run servers

Go to Taskmaster directory /client

```bash
cd TaskMaster/client/
```

And run

```bash
npm i
npm start
```
This will install all the required packages for the frontend.
Replace Base URL with your backend server url 
for backend go to server directory
```bash
npm i
nodemon server.js
```
After installing the required packages, start the backend server

! Don't forget to set up cors 

The site should start running
