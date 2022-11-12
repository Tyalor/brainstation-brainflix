import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header/Header"
import { Video } from './pages/Video/Video';
import { Home } from './pages/Home/Home';
import { Upload } from './pages/Upload/Upload';

function App() {


  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/videos/:videoId' element={<Video />}></Route>
          <Route path='/upload' element={<Upload />}></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
