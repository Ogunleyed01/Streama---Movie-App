# Streama---Movie-App

## Description
Streama is a modern web application that allows users to discover and search for movies. It utilizes The Movie Database (TMDB) API to fetch movie data and display it in an attractive, user-friendly interface.

## Features
- Browse popular movies
- Search for specific movies
- View movie details including:
  - Movie poster
  - Title
  - Rating (color-coded)
  - Overview/Description
- Responsive design for all screen sizes
- Hover effects to reveal movie descriptions

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- TMDB API

## Setup and Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/streama-movie-app.git
```
2. Get your API key from [TMDB](https://www.themoviedb.org/documentation/api)
3. Replace `YOUR_API_KEY` in `script.js` with your actual API key
4. Open `index.html` in a web browser

## Project Structure
```
Movie App/
│
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # JavaScript functionality
└── README.md      # Documentation
```

## Usage
- The homepage displays popular movies by default
- Use the search bar to find specific movies
- Hover over movie cards to view the full description
- Ratings are color-coded:
  - Green: 7+ rating
  - Orange: 5-6.9 rating
  - Red: Below 5 rating

## API Reference
This project uses the TMDB API endpoints:
- Popular movies: `https://api.themoviedb.org/3/movie/popular`
- Search movies: `https://api.themoviedb.org/3/search/movie`

## Credits
- Developed by E-Dave
- Movie data provided by [TMDB](https://www.themoviedb.org/)

## License
Copyright © 2025 E-Dave. All
