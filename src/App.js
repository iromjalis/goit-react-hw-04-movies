import React, { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
//lazy components
const Home = lazy(() =>
  import('./pages/Home/Home' /*webpackChunkName: "Home"*/),
);
const SearchMovies = lazy(() =>
  import('./pages/SearchMovies' /*webpackChunkName: "SearchMovies"*/),
);
const MovieDetails = lazy(() =>
  import('./pages/MovieDetails' /*webpackChunkName: "MovieDetails"*/),
);
const NotFound = lazy(() =>
  import('./pages/NotFound' /*webpackChunkName: "NotFound"*/),
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={SearchMovies} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
