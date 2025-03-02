# PostHub

PostHub is a social media platform that allows users to create, share, and engage with posts. It provides a modern interface for social interactions, content discovery, and community building.

## Features

- **User Authentication**: Secure signup and login functionality
- **Post Creation**: Create and share posts with text content and images
- **Social Interactions**: Like, comment, and share posts with others
- **Profile Management**: Customize your profile with personal information and profile pictures
- **Real-time Updates**: Receive notifications and see content updates in real-time
- **Responsive Design**: Access PostHub seamlessly across desktop and mobile devices

## Technologies Used

- **Frontend**: React.js, Redux for state management
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Cloud Storage**: For storing images and media
- **Styling**: CSS, SCSS, Material UI components

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/harryhome1/PostHub-.git
   cd PostHub-
   ```

2. Install dependencies for both frontend and backend:
   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development servers:
   ```
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm start
   ```

5. Access the application at `http://localhost:3000`

## Usage

1. Register a new account or log in with your existing credentials
2. Create posts by clicking on the "Create Post" button on the dashboard
3. Explore your feed to see posts from other users
4. Interact with posts by liking, commenting, or sharing
5. Edit your profile information and upload a profile picture
6. Follow other users to see their content in your feed

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get specific post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `PUT /api/posts/:id/like` - Like/unlike a post

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/posts` - Get all posts from a specific user

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern social media platforms and community feedback
