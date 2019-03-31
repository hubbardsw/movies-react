import React, { Component } from 'react'
import './App.css';
import MovieList from './Components/movies.jsx'
import NavBar from './Components/NavBar.jsx'

class App extends Component {
  constructor(props){
  super(props)
  }

  render() {
    return (
      <div className="App">
      <NavBar />
        <MovieList />
      </div>
    )}

}

export default App;

