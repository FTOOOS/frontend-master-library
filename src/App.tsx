import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoadMap from './pages/roadMap';
import Category from './pages/category';
import Detail from './pages/detail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoadMap />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
