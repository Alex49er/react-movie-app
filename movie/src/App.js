import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import {Switch, Route} from 'react-router-dom';


function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    console.log(searchText, "is the search text")
    fetch(`http://api.themoviedb.org/3/search/movie?api_key=107708d07fb59d7d5b7586af1aad916d&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(resonse => resonse.json())
    .then(data => {
      setSearchResults(data.results)
    })
  }, [searchText])


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
      <Route path ="/" exact>
        <Home/>
      </Route>
      <Route path="/about" component={AboutView}/>
         <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults}/>
         </Route>
      <Route path="/movies/:id" component={MovieView}/>
      </Switch>
    </div>
  );
}

export default App;
