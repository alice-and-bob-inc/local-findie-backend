# Local Findie - Local Business Directory - Backend (Express API)

## Description

Local Findie is a full-stack web application that helps users discover, review, and interact with local businesses. Users can search for businesses and leave reviews. The app provides search filters, making it easier to find businesses like restaurants, shops, or services in a specific area.

THIS BACKEND is built with Node.js/Express using MongoDB for data storage.


You will find the Frontend Repository with the setup instructions, here:

```
https://github.com/alice-and-bob-inc/local-findie-frontend.git
```


## Instructions to Run the App - Backend (Express API)

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


## API Endpoints

**Auth endpoints**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /auth/signup  | –  | { email: String, password: String }  | Create an account  |
| POST  | /auth/login  | –  | { email: String, password: String }  | Login  |
| GET  | /auth/verify  | Authorization: Bearer `<jwt>`  | –  | Verify jwt  |


<br/>

**Businesses**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/businesses  | Authorization: Bearer `<jwt>`  | { name: String, description: String }  | Create new business  |
| GET  | /api/businesses  | –  | –  | Get all businesses  |
| GET  | /api/businesses/:businessId  | –  | – | Get business details  |
| PUT  | /api/businesses/:businessId  | Authorization: Bearer `<jwt>`  | { name: String, description: String, user: ObjectId }  | Update a business  |
| DELETE  | /api/businesses/:businessId  | Authorization: Bearer `<jwt>`  | – | Delete a business  |


<br/>

**Reviews**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/businesses/:businessId/reviews  | Authorization: Bearer `<jwt>`  | { title: String, description: String, businessId: ObjectId }  | Create new task  |
| GET  | /api/businesses/:businessId/reviews  | –  | –  | Get all reviews of a specific business  |


## Demo

You can see [here](https://local-findie.netlify.app/) the live version of the project on Netlify.