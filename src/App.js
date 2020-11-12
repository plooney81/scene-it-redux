
import './App.css';
import { Button, Container, Typography, Grid, Box, Paper, InputBase } from '@material-ui/core';
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import {setData, loading, loaded} from './redux/action'
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector(state => state)

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(loading())

    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodeURIComponent(search)}`)
      .then((res) => res.json())
      .then(data => {
        dispatch(setData(data.Search))
        dispatch(loaded())
      })
      .catch(e=> console.log(e))
  }

  return (
    <Container>
      <Typography variant="h1" align="center">Scene It!</Typography>
      <Grid container direction="row" justify="center" alignItems="center">
      <Box p={2} width="80%" maxWidth={400}>
          <Paper component="form" onSubmit={handleSearch} style={{ width: '100%' }}>
            <Box p={1}>
              <Grid container direction="row" alignItems="center" justify="center">
                <InputBase
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search movies' }}
                  value={search}
                  onChange={(e) => {setSearch(e.target.value)}}
                  style={{ flexGrow: '1' }}
                />
                <Button type="submit" variant="contained" disableElevation>Search</Button>
              </Grid>
            </Box>
            </Paper>
        </Box>
      </Grid>
      <Grid container spacing={3} style={{marginTop: '12px'}}>
        {movies.results.map(movie => {
          return (
            <Grid key={movie.imdbID} item xs={4}>
              <MovieCard movie={movie}></MovieCard>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  );
}

export default App;
