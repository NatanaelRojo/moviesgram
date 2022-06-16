const homePage = () => {    
    headerSection.classList.remove("header-container--long");
    headerSection.style.background = "";
    arrowBtn.classList.add("inactive");
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');
}

const categoryPage = () => {
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [hash, categoryData] = location.hash.split("=");
    const [categoryId, categoryName] = categoryData.split("-");
    const categoryTitle = document.createTextNode(categoryName);
    headerCategoryTitle.appendChild(categoryTitle);
    getMoviesByCategory(categoryId);
}

const searchPage = () => {
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');  
    const [hash, query] = location.hash.split("=");
    getMoviesBySearch(query);
}

const movieDetailsPage = () => {
    headerSection.classList.add('header-container--long');
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
    
    const [hash, movie_id] = location.hash.split("=");
    getMovieDetail(movie_id);
}

const trendingPage = () => {
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    const categoryTitle = document.createTextNode("Tendencias");
    headerCategoryTitle.appendChild(categoryTitle);
    searchForm.classList.add('inactive');
  
    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
    getTrendingMovies();
}

const navegator = () => {
    const hash = location.hash;

    if (hash.startsWith("#trends")){
        trendingPage();
    } else if (hash.startsWith("#search=")){
        searchPage();
    } else if (hash.startsWith("#movie=")){
        movieDetailsPage();
    }  else if (hash.startsWith("#category=")){
        categoryPage();
    } else {
        homePage();
    }
    scrollTo(0, 0);
}

window.addEventListener("DOMContentLoaded", navegator, false);
window.addEventListener("hashchange", navegator, false);

searchFormBtn.addEventListener('click', () => {
    location.hash = `#search=${searchFormInput.value.trim()}`;
});
trendingBtn.addEventListener('click', () => {
    location.hash = "#trends";
});
arrowBtn.addEventListener('click', () => {
    history.back();
  });
  