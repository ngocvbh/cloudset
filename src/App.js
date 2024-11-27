import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/home_page/HomePage.js';
import SearchScreen from './components/search_screen/SearchScreen.js';

function App() {

  const [city, setCity] = useState("Irvine");

  // Function to update the location
  const setLocation = (newCity) =>{
    setCity(newCity);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen setCity={setLocation}/>}/>
        <Route path="/home_page" element={<HomePage city={city.toString()}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
