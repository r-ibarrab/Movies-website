

class Movies{
    #range
    #movies
    #allmovies
    #loadMore

    constructor(){
        this.movies = []
        this.range = 0
        this.allmovies = false
        this.fetchMovies()
        this.loadMore = document.querySelector('.load-more')
        this.loadMore.addEventListener('click',e=>{
            this.fetchMovies()
        })
    }

    async fetchMovies(){
        try{
            const response = await fetch(`/api/range/${this.range}/${this.range+8}`)
            this.movies = await response.json()
            if(this.movies.length <8){
                this.range+= this.movies.length
                this.allmovies=true

                this.hideLoad()
            }else{
                this.range+=8
            }
            this.appendMovies()

        }catch(e){
            this.errorHandling(e)
        }
    }

    appendMovies(){
        const moviesContainer = document.querySelector('.movies-container')
        console.log(this.movies)
        this.movies.forEach(movie=>{
            moviesContainer.innerHTML+= this.movieTemplate(movie)
        })
    }

    hideLoad(){
        this.loadMore.remove()
    }

    errorHandling(e){
        console.log(e)
        alert('error')
    }

    movieTemplate(movie){

        return `
        <div class="movie">
            <h4>${movie.title}</h4>
            <p>${movie.rank}</p>
        </div>
        `
    }
}


const moviesObject = new Movies