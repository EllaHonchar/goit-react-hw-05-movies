import HomePage from 'pages/Home/HomePage';
import MoviesPage from 'pages/Movies/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetails/MovieDetailsPage';
import Cast from 'pages/Cast/CastPage';
import Reviews from 'pages/Reviews/ReviewsPage';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    </Routes>
  );
}
