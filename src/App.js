import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ShowPost from './components/ShowPost';

function App() {
  document.body.style.backgroundColor = '#1b1c30';

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/show/:id' element={<ShowPost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
