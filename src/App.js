import './App.css';
import {useEffect, useState} from "react"
import Gallery from './Components/Gallery';
import SearchBar from './Components/Searchbar';

function App() {

  // state for searchBar text 
  let [searchText, setSearchText] = useState("")
  // success/error message returned by API call
  let [message, setMessage] = useState("Search for Music!")
  // data to be displayed by gallery (returned data from API call)
  let [data, setData] = useState([])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchText(term)
  }

  useEffect(() => {
    const fetchData = async () => {
      document.title = `${searchText} Music`
      let response = await fetch()
    }
  })

  return (
    <div className="App">
      <SearchBar searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch}/>
      {message}
      <Gallery data = {data}/>
    </div>
  );
}

export default App;
