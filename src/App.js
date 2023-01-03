
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Parent from './components/parent/parent';
import About from './components/about/about';
import Categories from './components/categories/categories';
import Category from './components/categories/category';
import Sessions from './components/categories/sessions';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Parent />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='categories' element={<Categories />}>
            <Route path=':catId' element={<Category />}>
              <Route path=':sessionId' element={<Sessions />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
