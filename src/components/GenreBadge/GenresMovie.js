import {useEffect, useState} from "react";
import {axiosMovies} from "../../service/movieService";
import {apiUrlMovies} from "../../constants/api";
import {Link} from "react-router-dom";
import GenresInfo from "./GenresInfo";
import {useDispatch} from "react-redux";
import moviesReducer from "../../store/reducers/moviesReducer";
import genresReducer from "../../store/reducers/genresReducer";


const GenresMovie = ({genres}) =>{
    const [movies, setMovies] = useState(null);
    const [genreId, setGenreId] = useState(null);
const dispatch = useDispatch();
    // dispatch(moviesReducer({movies}));
    // dispatch(genresReducer({genres}));
    useEffect(()=> {
        (async () => {
            const res = await axiosMovies(apiUrlMovies);
           setMovies(res.data.results);
           setGenreId(res.data.results.genre_ids);
        })();
    },[]);
            return (
                <div>
                    <ul>
                        {
                           genres && genres.map(({id,name}) => (

                                <li  className={'genreBadge'} key={id}>
                                    <Link className={'link_genreBadge'} to={'/GenresMovie'} >
                                        {name}
                                    </Link>
                                </li>
                            ))
                           // (movies && movies.map(({genres_ids}) =>{
                           //         for (const genres_idsElement of genres_ids) {
                           //             console.log(genres_idsElement);
                           //         }
                           // //  const sorter = movies.sort(({id ,genres_ids})=>
                           // //      (id === genres_ids));
                           // //  return sorter;
                           // //         console.log(sorter);
                           //     }
                           // ))
                        }
                    </ul>

<GenresInfo/>


                </div>
            )
}
export default GenresMovie;
