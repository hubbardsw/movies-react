import React from 'react'
import axios from 'axios'
import SearchForm from './SearchForm'
import './movies.css'
import MovieInfo from './MovieInfo'





export default class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerms: ''
      , searchResults: []
      , show: false
      , requestMore:false
      ,title:''
      ,poster:''
      ,year:''
      ,imdb:''
      ,plot:''
      ,ratings:[]
    }
  
  }

  accessChild = () => {
    this.refs.child.handleClickOpen()
  }

    showModal = () => {
      this.setState({ show: true });
    }
    hideModal = () => {
      this.setState({ show: false, requestMore:false })
    }


  getSearchTerms = (e) => {
    e.preventDefault();
    const search = this.state.searchTerms
    axios.get(`http://www.omdbapi.com/?s=${search}&apikey=9767d011`)
      .then(res => {
        console.log(res)
        this.setState({ searchResults: res.data.Search })
        this.addId(this.state.searchResults)
      })
  }

  addId = (arr) => {
    let movies = arr
    let i = 0
    for (let movie of movies) {
      movie._id = i++
    }

  }

  handleChangeValue = e => this.setState({searchTerms: e.target.value});

  showMovie = (movie) =>{
    this.showModal()
    const title = movie.Title
    const poster = movie.Poster
    const year = movie.Year
    const imdb = movie.imdbID
    this.setState({title,poster,year,imdb})
  }

  getMoviePlot = () => {
    this.setState({requestMore:true})
    const imdb = this.state.imdb
    axios.get(`http://www.omdbapi.com/?i=${imdb}&apikey=9767d011`)
    .then(res=>{
      this.setState({plot: res.data.Plot, ratings:res.data.Ratings})
      this.addId(this.state.ratings)
    })
  }

  render() {
    const movieList = this.state.searchResults.map((movie) => { 
      return (
        <div key={movie.imdbID} className="col-md-2 float-left poster" onClick={(event) => {this.showMovie(movie)}}>
          <img className="poster-image" alt="poster" src={movie.Poster} />
          

        </div>
      )
    })

    return (
      <div>
        <SearchForm getSearchTerms={this.getSearchTerms} value={this.state.searchTerms} onChangeValue={this.handleChangeValue}/>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="col-md-2"></div>
            <div>{movieList}</div>
          </div>
        </div>
        <MovieInfo 
        show={this.state.show} 
        handleClose={this.hideModal} 
        title={this.state.title} 
        image={this.state.poster} 
        year={this.state.year} 
        imdb={this.state.imdb} 
        getInfo={this.getMoviePlot}
        showMore={this.state.requestMore}
        plot = {this.state.plot}
        ratings = {this.state.ratings}
        />
      </div>
    )
  }
}
