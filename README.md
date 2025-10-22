# Todo Application

A full-stack todo application built with React frontend and Express.js backend. The application allows users to create, read, update, and delete todo items with a clean and responsive user interface.

## Project Structure

```
todo-app/
├── frontend/           # React frontend application
│   ├── public/        # Static files
│   └── src/           # Source files
│       ├── App.js     # Main application component
│       └── ...
└── Backend/           # Express.js backend server
    ├── server.js      # Server implementation
    └── package.json   # Backend dependencies
```

## Features

- Create new todo items
- Mark todos as complete/incomplete
- Delete todo items
- Responsive design
- REST API backend
- Azure Static Web Apps deployment

## Technologies Used

### Frontend
- React.js
- CSS3 for styling
- Create React App for project setup

### Backend
- Node.js
- Express.js
- CORS middleware

## Getting Started

### Prerequisites
- Node.js (latest LTS version)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/harrrri7/TODO-APP.git
cd todo-app
```

2. Install Backend Dependencies:
```bash
cd Backend
npm install
```

3. Install Frontend Dependencies:
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the Backend Server:
```bash
cd Backend
npm start
```
The server will start on http://localhost:5000

2. Start the Frontend Development Server:
```bash
cd frontend
npm start
```
The frontend will start on http://localhost:3000

## API Endpoints

- GET `/todos` - Get all todos
- POST `/todos` - Create a new todo
- PUT `/todos/:id` - Update a todo
- DELETE `/todos/:id` - Delete a todo

## Deployment

The application is configured for deployment on Azure Static Web Apps with GitHub Actions for CI/CD.

## Development Scripts

### Frontend
- `npm start` - Run development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

### Backend
- `npm start` - Start the server
- `npm run dev` - Start the server with nodemon for development

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).