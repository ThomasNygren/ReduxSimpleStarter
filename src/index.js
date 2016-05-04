import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'


const API_KEY = 'AIzaSyAobuX6mQrfibpfnWJKaZ8dhvt5Dv_sc_I';
const App = () => {
  return (
    <div>
      <h1>Her er jeg</h1>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container') );
