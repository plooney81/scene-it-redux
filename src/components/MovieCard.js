import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import React from 'react';
// import './MovieCard.css';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from 'react-redux';
import { addMovie } from '../redux/action';



export default function MovieCard({movie}) {
    const dispatch = useDispatch();
    const handleAddMovie = () => {
        dispatch(addMovie(movie))
    }
    return (
        <Card className="movie-card" style={{height: '100%'}}>
            <CardActionArea >
                <CardMedia 
                style={{height: '400px' }}
                image={movie.Poster}
                title={`${movie.Title}'s Movie Poster`}
                />
                <CardContent>
                    <Typography variant="h5">{movie.Title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{movie.Year}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <IconButton size="small" color="primary" onClick={handleAddMovie}>
                        <AddIcon></AddIcon>
                    </IconButton>
                    <p>Add Movie</p>
            </CardActions>
        </Card>
    )
}
