## User Endpoints

### Register a User

- URL: `/users`
- Method: `POST`
- Description: Registers a new user.
- Request Body:
  - `firstName` (string, required): The first name of the user.
  - `lastName` (string, required): The last name of the user.
  - `email` (string, required): The email address of the user.
  - `password` (string, required): The password of the user.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{ message: "Registration successful" }`
  - Error:
    - Status Code: 400
    - JSON Response: `{ message: "User with email already exists!" }`

### Get All Users

- URL: `/users`
- Method: `GET`
- Description: Retrieves all users.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: An array of user objects.

### Get User by ID

- URL: `/users/:id`
- Method: `GET`
- Description: Retrieves a user by their ID.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: The user object.
  - Error:
    - Status Code: 404
    - JSON Response: `{ message: "User not found" }`

### Update User

- URL: `/users/:id`
- Method: `PUT`
- Description: Updates a user by their ID.
- Request Body:
  - `firstName` (string, optional): The updated first name of the user.
  - `lastName` (string, optional): The updated last name of the user.
  - `email` (string, optional): The updated email address of the user.
  - `password` (string, optional): The updated password of the user.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{ message: "User updated successfully" }`
  - Error:
    - Status Code: 404
    - JSON Response: `{ message: "User not found" }`

### Delete User

- URL: `/users/:id`
- Method: `DELETE`
- Description: Deletes a user by their ID.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{ message: "User deleted successfully" }`
  - Error:
    - Status Code: 404
    - JSON Response: `{ message: "User not found" }`

## Authentication Endpoints

### Login

- URL: `/login`
- Method: `POST`
- Description: Authenticates a user and generates a token.
- Request Body:
  - `email` (string, required): The email address of the user.
  - `password` (string, required): The password of the user.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{ message: "Welcome back!", token: "generated_token" }`
  - Error:
    - Status Code: 400
    - JSON Response: `{ message: "Email or password doesn't match!" }`

## Blog Post Endpoints

### Create a Blog Post
- URL: `/blogPosts`
- Method: `POST`
- Description: Creates a new blog post.
- Request Body:
  - `recordingDate` (string, required): The recording date of the blog post.
  - `message` (string, required): The content of the blog post.
  - `authorId` (number, required): The ID of the author.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{  message: "Blog post created successfully" }`
  - Error:
    - Status Code: 400
    - JSON Response: `{ message: "Invalid blog post data" }`


### Get All Blog Posts

- URL: `/blogPosts`
- Method: `GET`
- Description: Retrieves all blog posts.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: An array of blog post objects

### Update Blog Post  
- URL: `/blogPosts/:id`
- Method: `PUT`
- Description: Updates a blog post by its ID.
- Request Body:
  - `recordingDate` (string, optional): The updated recording date of the blog post.
  - `message` (string, optional): The updated content of the blog post.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{ message: "Blog post updated successfully" }`
  - Error:
    - Status Code: 404
    - JSON Response: `{ message: "Blog post not found" }`

### Delete Blog Post  
- URL: `/blogPosts/:id`
- Method: `DELETE`
- Description: Deletes a blog post by its ID.
- Response:
  - Success:
    - Status Code: 200
    - JSON Response: `{ message: "Blog post deleted successfully" }`
  - Error:
    - Status Code: 404
    - JSON Response: `{ message: "Blog post not found" }`
