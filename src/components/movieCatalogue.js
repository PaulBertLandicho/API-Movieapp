import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Form from './form';
import Paginate from 'react-paginate';
import WatchListBtn from './watchListBtn';

function MovieCatalogue({ watchList, setWatchList }) {

    const [movies, setMovies] = useState([]); // Initialize with an empty array
    const [page, setPage] = useState(1);
    const [year, setYear] = useState(null);
    const [allPages, setAllPAges] = useState(20);
    const [category, setCategory] = useState("");
    const isMounted = useRef(false);

    const API_KEY = '443a4596b85914edb9a1a8e80c7456c3';

    useEffect(() => {
        fetchMovies();  // Initial fetch based on page and year
    }, [page, year]);

    useEffect(() => {
        if (isMounted.current) {
            fetchMoviesByCategory();  // Fetch when category changes
        } else {
            isMounted.current = true;
        }
    }, [category]);

    async function fetchMovies() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&primary_release_year=${year}`);
            const data = await response.json();

            if (data.results) {
                setMovies(data.results);
                setAllPAges(data.total_pages);
            } else {
                console.error('Error fetching movies:', data);
                setMovies([]);  // Set empty array if no data
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies([]);  // Fallback to empty array in case of error
        }
    }

    async function fetchMoviesByCategory() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${page}`);
            const data = await response.json();

            if (data.results) {
                setMovies(data.results);
                setAllPAges(data.total_pages);
            } else {
                console.error('Error fetching movies by category:', data);
                setMovies([]);  // Set empty array if no data
            }
        } catch (error) {
            console.error('Error fetching movies by category:', error);
            setMovies([]);  // Fallback to empty array in case of error
        }
    }

    function handlePageChange(page) {
        setPage(page.selected + 1); // Adjust page index for 0-based index
    }

    return (
        <div className="catalogue">
            <Form setYear={setYear} setCategory={setCategory} />
            
            <div className="catalogue-list">
                {movies && movies.length > 0 ? (
                    movies.map(movie => (
                        <div key={movie.id} className="catalogue-item">
                            <img 
                                src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
                                alt={movie.title} 
                            />
                            <div className="catalogue-item-detail">
                                <span className="title">{movie.title}</span>
                                <span className="overview">{movie.overview.substring(0, 100)}</span>
                                <Link to={`/movie/${movie.id}`}>
                                    <button>Watch now</button>
                                </Link>
                            </div>
                            <div className="heart">
                                <WatchListBtn 
                                    watchList={watchList} 
                                    setWatchList={setWatchList} 
                                    movie={movie} 
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No movies available</div> // Fallback message if no movies
                )}
            </div>

            <Paginate
                pageCount={allPages}
                initialPage={0}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                previousLabel={<i className="fas fa-angle-left"></i>}
                nextLabel={<i className="fas fa-angle-right"></i>}
                containerClassName={'paginate-container'}
                pageClassName={'paginate-item'}
                activeClassName={'paginate-active-item'}
                previousClassName={'paginate-previous'}
                nextClassName={'paginate-next'}
                disabledClassName={'paginate-disabled'}
                breakClassName={'paginate-break'}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default MovieCatalogue;
