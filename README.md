# Netflix Frontend Clone

This is a **Netflix Frontend Clone** built with **React JS**. The project uses **Firebase Authentication** and **Firestore** for user management and data storage. The application is designed to be **fully responsive** for seamless viewing on any device.

## Features

- **User Authentication**: Firebase Authentication is used to enable secure sign-in and sign-up.
- **Firestore Integration**: User data and preferences are stored and managed in Firestore.
- **Responsive Design**: The layout adjusts for mobile, tablet, and desktop views to provide a seamless user experience.
- **React Hooks and Functional Components**: Modern React practices for improved performance and readability.

## Installation

### Prerequisites

- **Node.js** (v12 or above)
- **npm** (or **yarn**)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Email/Password) and Firestore Database.
   - Copy your Firebase configuration details (API key, Auth Domain, Project ID, etc.).
   - Create a `.env` file in the root directory and add your Firebase credentials:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Technologies Used

- **React JS**: For building the user interface.
- **Firebase Authentication**: For secure user authentication.
- **Firestore Database**: For data management and storage.
- **CSS**: For styling and responsive design.

## Folder Structure

- **src**: Contains all source code files.
  - **components**: Reusable components like Header, Footer, MovieCard, etc.
  - **pages**: Screens for different parts of the application (Home, Login, Browse).
  - **firebase.js**: Firebase configuration and setup.
  - **App.js**: Main app component and routing.

## Contributing

Feel free to submit issues or contribute to the project by creating a pull request. Ensure that your code follows the project’s guidelines and is tested.

## License

This project is open-source and available under the MIT License.

---
