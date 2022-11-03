import './App.scss';
import { Header } from "./components/Header/Header"
import { VideoPlayer } from './components/VideoPlayer/VideoPlayer';
import { VideoDesc } from './components/VideoDesc/VideoDesc';
import { VideoComments } from './components/VideoComments/VideoComments';
import { VideoList } from './components/VideoList/VideoList';

function App() {
  return (
    <>
      <Header />
      <div>
        <VideoPlayer />
        <VideoDesc />
        <VideoComments />
        <VideoList />
      </div>
    </>
  );
}

export default App;
