import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import LayOut from './pages/LayOut';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailClinicalNote from './pages/DetailClinicalNote/DetailClinicalNote';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="detail" element={<DetailClinicalNote />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
