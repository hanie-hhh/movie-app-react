

# Movie & TV Show Search App

This is a React-based web application that allows users to search and view popular movies and TV shows. The app fetches data from The Movie Database (TMDB) API and provides features like movie search, TV show search, and a favorites list.

## Features

- **Movie & TV Show Search**: Users can search for their favorite movies or TV shows by title.
- **Popular Movies**: Displays a list of the most popular movies.
- **Popular TV Shows**: Displays a list of the most popular TV shows.
- **Favorites**: Users can bookmark their favorite movies or TV shows for easy access.
- **Responsive Design**: The app is fully responsive, providing a seamless experience across different devices and screen sizes.

## Screenshots
![iScreen Shoter - 20241001192225065](https://github.com/user-attachments/assets/48355eae-b9aa-4972-b4ae-3b4db3fad49a)


## Live Demo

Check out the live demo: [[Live Demo Link]](https://hanie-hhh.github.io/movie-app-react/)(#)

## Installation

To get started with the project locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone (https://github.com/hanie-hhh/movie-app-react)
   ```

2. Navigate to the project directory:

   ```bash
   cd movie-app-react
   ```

3. Install dependencies:

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

4. Create a `.env` file in the root directory and add your TMDB API key:

   ```
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here
   ```

   You can obtain an API key by creating an account on [TMDB](https://www.themoviedb.org/).

5. Start the development server:

   Using npm:
   ```bash
   npm start
   ```

   Using yarn:
   ```bash
   yarn start
   ```

6. Open the app in your browser by navigating to `http://localhost:3000`.

## Technologies Used

- **React.js**: Front-end library for building user interfaces.
- **TMDB API**: Used for fetching movie and TV show data.
- **Material UI**: For building responsive, accessible UI components.
- **React Router**: For handling navigation in the app.
- **React Hooks**: For state management and lifecycle methods.
- **Axios**: For making API requests.

## Folder Structure

```
movie-tv-search-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hook/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env
├── package.json
├── README.md
└── ...
```

## Contributing

If you'd like to contribute to this project, feel free to open a pull request or an issue.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request



