import './App.css'
import { Route, Routes, createSearchParams,useNavigate} from "react-router-dom";
import NewsBody from './components/NewsBody/NewsBody';
import Navbar from './components/Navbar/Navbar';
function App() {
  const navigate = useNavigate();

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({q:searchQuery})}`)
  }

  return (
    <div className="font-serif">
      <Navbar onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<NewsBody />} />
      </Routes>
    </div>
  );
}

export default App
