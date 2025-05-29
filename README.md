Express Book API
A simple RESTful API for managing a list of books, built with Node.js and Express.

Features
View all books (GET /books)

Add a new book (POST /books)

Update an existing book (PUT /books/:id)

Delete a book (DELETE /books/:id)

Getting Started
Prerequisites
Node.js installed on your system

npm (comes with Node.js)

Postman or similar tool for API testing

Installation
Clone or download this repository.

Open the project folder in VS Code or your preferred editor.

Open the terminal and run:

bash
npm install express
Running the Server
Start the server with:

bash
node index.js
Or, if you have nodemon installed:

bash
nodemon index.js
The server will run on http://localhost:3000.

API Endpoints
Get All Books
GET /books

Response:
Returns an array of all book objects.

Add a New Book
POST /books

Body: (JSON)

json
{
  "title": "Book Title",
  "author": "Author Name"
}
Response:
Returns the newly added book object.

Update a Book
PUT /books/:id

Params:
id — The ID of the book to update

Body: (JSON)

json
{
  "title": "Updated Title",
  "author": "Updated Author"
}
Response:
Returns the updated book object, or a 404 error if not found.

Delete a Book
DELETE /books/:id

Params:
id — The ID of the book to delete

Response:
Returns the deleted book object, or a 404 error if not found.

Testing with Postman
Start the server.

Open Postman.

Use the above endpoints to test the API:

For POST and PUT, set Body to raw and select JSON.

Make sure Content-Type is application/json.

Send requests and verify responses.

Notes
This API uses an in-memory array for storing books. Data will reset when the server restarts.

No PATCH endpoint is included, as per assignment requirements.

Screen shots of the results
![Screenshot 2025-05-29 160009](https://github.com/user-attachments/assets/b19fb635-8b1f-42cd-99d8-a76cd3721cd7)
![Screenshot 2025-05-29 155127](https://github.com/user-attachments/assets/c4e1bb72-2683-4c98-bd73-ce9d15dc57fb)
![Screenshot 2025-05-29 154834](https://github.com/user-attachments/assets/5fd6220b-3095-44ee-868b-1c8a80f466e2)
![Screenshot 2025-05-29 154136](https://github.com/user-attachments/assets/f4cd4e22-8b0f-423b-b607-c3849103afb1)




