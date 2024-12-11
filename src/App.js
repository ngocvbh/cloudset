import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/home_page/HomePage.js';
import SearchScreen from './components/search_screen/SearchScreen.js';

function App() {

  // Holds the location
  /* setPlace(place => ({
              ...place,
              ...updatedValue}))
     updatedValue = {"city":__, "state":__, "country":__}*/
  const [place, setPlace] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen setLocation={setPlace}/>}/>
        <Route path="/home_page" element={<HomePage location={place}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
