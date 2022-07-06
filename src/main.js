const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
        "api_key": API_KEY,
    },
});
const API_URL_BASE = "https://api.themoviedb.org/";
const IMAGES_URL = "https://image.tmdb.org/t/p/w300";
const IMAGES_POSTER_URL = "https://image.tmdb.org/t/p/w500";

const getTrendingMoviesPreview = async () => {
    const { data } = await api("trending/movie/day");
    const movies = data.results;
    createMoviesList(movies, trendingMoviesPreviewList);
}

const getTrendingMovies = async () => {
    const { data } = await api("trending/movies/day");
    const movies = data.results;
    createMoviesList(movies, genericSection);
}

const getCategoriesPreview = async () => {
    const { data } = await api("genre/movie/list");
    const categories  = data.genres;
    createCategoryList(categories, categoriesPreviewList);
}

const getMoviesByCategory = async (categoryId) => {
    const { data } = await api("discover/movie", {
        paramms: {
            with_genres: categoryId,
        }
    });
    const movies = data.results;
    createMoviesList(movies, genericSection);
}

const getMoviesBySearch = async (query) => {
    const { data } = await api("search/movie", {
        params: {
            query,
        }
    });
    const movies = data.results;
    createMoviesList(movies, genericSection);
}

const getRelatedMovies = async (movie_id) => {
    const {data} = await api(`movie/${movie_id}/similar`);
    const relatedMovies = data.results;
    createMoviesList(relatedMovies, relatedMoviesContainer);
}

const getMovieDetail = async (movie_id) => {
    const {data: movie} = await api(`movie/${movie_id}`);
    const movieImageUrl = IMAGES_POSTER_URL + movie.poster_path;

    headerSection.style.background = `
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 19.27%,
      rgba(0, 0, 0, 0) 29.17%
    ),
    url(${movieImageUrl})
    `;
    movieDetailTitle.textContent = movie.title;
    movieDetailDescription .textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;
    createCategoryList(movie.genres, movieDetailCategoriesList)
    getRelatedMovies(movie_id);
    relatedMoviesContainer.scrollTo(0, 0);
}

getTrendingMoviesPreview();
getCategoriesPreview();