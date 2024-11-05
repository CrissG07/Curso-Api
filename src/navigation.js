searchFormBtn.addEventListener('click',()=>{
    
    location.hash=`#search=${searchFormInput.value.trim()}`
});

trendingBtn.addEventListener('click',()=>{
    location.hash='#trends'
});

let isNavigating = false; // Variable para evitar bucles

document.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

arrowBtn.addEventListener('click', () => {
    if (!isNavigating) {
        history.back();
    }
});

function navigator() {
    if (isNavigating) return; // Evita llamadas duplicadas
    isNavigating = true;

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailPage();
    } else if (location.hash.startsWith('#category=')) {
        categoriesPage();
    } else {
        homePage();
    }

    window.scrollTo(0,0);

    setTimeout(() => {
        isNavigating = false; // Permite la próxima navegación después de un pequeño retraso
    }, 100);
}

function homePage(){
    console.log('Home');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');


    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getCategoriesPreview()
    getTrendingMoviesPreview()
}

function categoriesPage(){
    console.log('Categories')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_,categoryData] =location.hash.split('=');
    const [categoryId,categoryName] =categoryData.split('-');

    headerCategoryTitle.innerHTML=categoryName
    getMoviesByCategories(categoryId);
}

function movieDetailPage(){
    console.log('Movie')

    headerSection.classList.add('header-container--long');
    // headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');


    const [_,movieId] =location.hash.split('=');
    getMovieById(movieId);
}

function searchPage(){
    console.log('Search')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_,query] =location.hash.split('=');
    getMovieBySearch(query)
}

function trendsPage(){
    console.log('TRENDS')

    headerSection.classList.remove('header-container--long');
    headerSection.style.background ='';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');


    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    headerCategoryTitle.innerHTML='Tendencias'

    getTrendingMovies();
}