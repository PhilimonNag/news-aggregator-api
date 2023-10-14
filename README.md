# news-aggregator-api
The News Aggregator API is a Node.js application that allows users to sign up, sign in, set preferences, and receive news articles tailored to their preferences.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [User Signup](#user-signup)
  - [User Sign In](#user-sign-in)
  - [User Get Available News Preference](#user-get-available-news-preference)
  - [User Get News Preference](#user-get-news-preference)
  - [User Update News Preference](#user-update-news-preference)
  - [User Get News](#user-get-news)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Features

- User signup and authentication
- User preferences management
- News aggregation based on user preferences
- Token-based authentication with JSON Web Tokens (JWT)
- Password hashing for security

## Installation

To install and run the News Aggregator API, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/PhilimonNag/news-aggregator-api.git
```

2. **Change to the project directory:**
```
cd news-aggregator-api
```


3. **Install the required dependencies using npm:**
```
npm install
```


4. **Set up a MongoDB database and update the database configuration in `src/config/config.js`.**

5. **Start the API server:**
```
npm start
```

6. Your API should now be running at `http://localhost:8002`

## Usage

### User Signup

To create a new user account, send a POST request to `http://localhost:8002/api/v1/auth/signup` with the following JSON data:

```json
{
  "fullName":"your name",
  "role":"normal",
  "email":"youremail@gmail.com",
  "password":"yourpasswor"
}
```
### User Sign In
To sign in, send a POST request to `http://localhost:8002/api/v1/auth/signin` with the following JSON data:
```json
{
  "email":"youremail@gmail.com",
  "password":"yourpasswor"
}
```
### User Get Available News Preference
To get  news preference send a GET request to `http://localhost:8002/api/v1/news/preferences/all`
Include the following header in your request:
```http
Authorization: yourToken
```

### User Get News Preference
To get his/her own news preference send a GET request to `http://localhost:8002/api/v1/news/preferences`
Include the following header in your request:
```http
Authorization: yourToken
```

### User Update News Preference
To update his/her own news preference send a PATCH request to `http://localhost:8002/api/v1/news/preferences` with the following JSON data and headers:
```json
{
  "category":"business"
}
```
Include the following header in your request:
```http
Authorization: yourToken
```

### User Get News
To Get News send a  GET   request to `http://localhost:8002/api/v1/news`
Include the following header in your request:
```http
Authorization: yourToken
```
## Configuration
The API can be configured in .env file
```
JWT_SECRET=
PORT=
DB_URL=
NEWS_URL='https://newsapi.org/v2/top-headlines/sources?'
API_KEY=
```

## Project structure
```
- .gitignore
- package.json
- README.md
- src
  - config
    - config.js
  - controllers
    - authController.js
    - newsController.js
  - helpers
    - preferencesValidator.js
  - localdatasource
    - data.json
  - middlewares
    - authMiddleware.js
  - models
    - user.js
  - routes
    - authRoutes.js
    - newsRoutes.js
    - router.js
  - app.js
```
## Dependencies
The News Aggregator API relies on the following libraries:

Node.js
Express.js
MongoDB
Bcrypt for password hashing
JSON Web Tokens (JWT) for authentication

## License
This project is licensed under the License Name - ISC
