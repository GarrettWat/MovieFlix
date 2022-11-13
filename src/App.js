
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navbar, Home} from './components/index';


const App = () => (
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home />}/>
    </Routes>
  </BrowserRouter>
)

export default App;
