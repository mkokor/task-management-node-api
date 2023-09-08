# Task Management Node.js Web API
<p align="justify">
This repository contains the source code for a task management Node.js Web API based on CRUD (Create Read Update Delete) operations. 
The implementation utilizes Express.js as the foundation for a fast and scalable web server and MongoDB for persistent data storage. 
Authentication is based on JSON Web Tokens, which are used to securely identify users and grant them permissions to manage their own tasks.
</p>

## Execution
<p align="justify">
Some features require a set up of .env file.<br> In application root folder, enter command below to install required packages.
</p>

```bash
npm install
```

<p align="justify">
In server root folder, enter one of the two following commands to run server.
</p>

```bash
node index.js
npm start
```

<p align="justify">
After a successful startup, server endpoints can be accessed on port 3000.
</p>


## Routes
- POST /api/authentication/registration
- POST /api/authentication/login
- POST /api/authentication/access-token-refresh
- POST /api/authentication/logout
- GET /api/tasks
- POST /api/tasks
- GET /api/tasks/:id
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id
