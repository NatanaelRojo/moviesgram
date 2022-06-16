const createMoviesList = (moviesArray, moviesContainer) => {
    moviesContainer.innerHTML = "";

    moviesArray.forEach(element => {
        const divContainer = document.createElement("div");
        const movieImage = document.createElement("img");
        divContainer.classList.add("movie-container");
        divContainer.addEventListener("click", () => {
            location.hash = `movie=${element.id}`;
        });
        movieImage.classList.add("movie-img");
        movieImage.setAttribute("alt", element.title);
        movieImage.setAttribute("src", `${IMAGES_URL}${element.poster_path}`);
        divContainer.appendChild(movieImage);
        moviesContainer.appendChild(divContainer);
    });
}

const createCategoryList = (categoriesArray, container) => {
    container.innerHTML = "";

    categoriesArray.forEach(element => {
        const categoryContainer = document.createElement("div");
        const categoryTitle = document.createElement("h3");
        const categoryTitleText = document.createTextNode(element.name);
        categoryContainer.classList.add("category-container");
        categoryTitle.classList.add("category-title");
        categoryTitle.setAttribute("id", `id${element.id}`);
        categoryTitle.appendChild(categoryTitleText);
        categoryTitle.addEventListener("click", () => {
            location.hash = `#category=${element.id}-${element.name}`;
        });
        categoryContainer.appendChild(categoryTitle);
        container.appendChild(categoryContainer);
    });
}