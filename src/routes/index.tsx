import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Home from '@/pages/Home';
import Continents from "@/pages/Continents";

const Rout = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/continents/:id" element={<Continents />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
);

export default Rout;