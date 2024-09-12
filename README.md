# Local Findie - Local Business Directory - Server

## Description

Local Findie is a full-stack web application that helps users discover, review, and interact with local businesses. Users can search for businesses and leave reviews. The app provides search filters, making it easier to find businesses like restaurants, shops, or services in a specific area.

This project is built with a React frontend and a Node.js/Express backend using MongoDB for data storage. It includes full CRUD functionality for businesses.

You will find the Frontend Repository with the setup instructions, here:

```
https://github.com/alice-and-bob-inc/local-findie-frontend.git
```

## Features

- Users can sign up, log in, and log out.
- Businesses can be created, updated, and deleted by users.
- Users can search and filter businesses with key words.
- Users can leave reviews and rate businesses.


## Instructions to Run the App - Backend

1. Clone the Backend Repository

```
git clone https://github.com/alice-and-bob-inc/local-findie-backend.git

cd local-findie-backend

code .
```

2. Install Dependencies by running this command

```
npm install
```

3. You will need to create a .env file in the server directory to store environment variables required for the backend

```
PORT = 5005
ORIGIN = http://localhost:5173
TOKEN_SECRET = <a_password_of_your_choice>
```

4. Run the Server

```
npm run dev
```

The backend API will be listening on http://localhost:5005

