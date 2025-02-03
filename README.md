
# Task Management Application

## Project Description

This Task Management Application is designed to help users manage their tasks effectively. It allows users to create, read, update, and delete tasks through a user-friendly interface. The frontend is built with React.js and styled using Tailwind CSS, while the backend uses Node.js and MongoDB. The application handles API requests and uses Next.js for server-side rendering. The codebase is thoroughly documented to aid understanding and ease of setup.

## Features

### User Interface:
- **User-friendly Interface**: Built with HTML, CSS, and Tailwind CSS.
- **Responsive Design**: Adapts to various screen sizes for a seamless user experience.

### Task Management:
- **Add Tasks**: Create new tasks.
- **View Tasks**: Display a list of all tasks.
- **Edit Tasks**: Update existing tasks.
- **Delete Tasks**: Remove tasks.

### API Handling:
- **API Requests**: Managed using vanilla JavaScript.
- **Fetch Tasks**: Retrieve tasks from the backend and display them on the frontend.
- **CRUD Operations**: Use POST, GET, PUT, and DELETE methods for managing tasks.

### Frontend:
- **React.js**: For building dynamic frontend components.
- **Next.js**: For server-side rendering.

### Backend:
- **Node.js**: For server-side scripting.
- **API Endpoints**: For task operations.
- **MongoDB**: For storing task data.

### Code Documentation:
- **Comprehensive Documentation**: Includes setup instructions and inline comments.

## Prerequisites
- **Node.js**: Version 18 or newer.

## Installation and Setup

To run  Task Management Application locally, follow these steps:

1. ZIP instal the repository.
2. Unzip the repository and Navigate to the backend directory:
   ```bash
   cd backend
3. Create a .env file and paste the following line into it: DB_URI='mongodb+srv://FAQ:FAQ@faqs.qhuvg.mongodb.net/?retryWrites=true&w=majority&appName=FAQs'
4. Install the necessary packages: `npm i`
5. Open a new terminal window.
5. Navigate to the frontend directory : `cd frontend`
6. Install the necessary packages : `npm i`
6. Start the frontend server: : `npm run dev`

## Running the Application
Once both the backend and frontend servers are running, open your web browser and navigate to: `http://localhost:3000`
