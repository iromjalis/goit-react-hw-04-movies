import React, { Component, lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import SearchMovies from './pages/SearchMovies/SearchMovies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import NotFound from './pages/NotFound/NotFound';
import css from './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={SearchMovies} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route component={NotFound} />
        <Redirect to={{ pathname: '/' }} />
      </Switch>
    </div>
  );
}

export default App;
