import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Home } from './Home/Home';
import { Arte } from './Arte/Arte';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/arte' element={<Arte/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;