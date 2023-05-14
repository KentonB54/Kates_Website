import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Nav,
  Welcome,
  Footer,
  About,
  Resume,
  Artwork
} from './components/index'

const App = () => {
  return (
  <div className='app--container'>
    <Nav />
    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/resume' element={<Resume />}/>
      <Route path='/artwork' element={<Artwork />}/>
    </Routes>
  </div>
  )
}

export default App;
