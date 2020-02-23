import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = { movies: getMovies() }
    render() {
        const {movies} = this.state
        return movies.length === 0 ? <h1>No movies available</h1>:(
            <table className = "table">
                <thead>
                    <tr>
                        <th scope="col"> # </th>
                        <th scope="col"> Title </th>
                        <th scope="col"> Genre </th>
                        <th scope="col"> Stock </th> 
                        <th scope="col"> Rate </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map((movie, id) => (
                       <tr key={id}>
                            <th scope="row"> {id + 1} </th>
                            <td> {movie.title} </td>
                            <td> {movie.genre.name} </td>
                            <td> {movie.numberInStock} </td>
                            <td> {movie.dailyRentalRate} </td>
                            <td> <button type="button" className="close" aria-label="Close" onClick={()=>this.onDeleteHandler(movie)}><span aria-hidden="true">&times;</span></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>)
    }
    onDeleteHandler = movie =>{
        const movies = this.state.movies.filter(m=>m._id!==movie._id)
        this.setState({movies})
    }
}
export default Movies