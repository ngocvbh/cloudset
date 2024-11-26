import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/home_page/HomePage.js';
import SearchScreen from './components/search_screen/SearchScreen.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchScreen/>}/>
        <Route path="/home_page" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
