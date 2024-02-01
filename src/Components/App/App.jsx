import '../App/App.scss';
import Header from '../Header/Header';
import WordsList from '../WordsList/WordsList';
import Slider from '../Slider/Slider';
import NotFound from '../NotFound/NotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className='body'>
      <Header/>
      <Routes>
        <Route path="/" element={<WordsList />} />
        <Route path="/game" element={<Slider />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
