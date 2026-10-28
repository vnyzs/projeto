
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './index.scss';

import Calculadora from './pages/Calculadora/calculadora.jsx';
import './pages/Calculadora/calculadora.scss';

import Background from './pages/Backgound/cores.jsx';
import './pages/Backgound/cores.scss';

import Contador from './pages/contadores/contadores.jsx';
import './pages/contadores/contadores.scss';

import Ingresso from './pages/ingressos/ingresso.jsx';
import './pages/ingressos/ingresso.scss';

import Escrever from './pages/escrever/escrever.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Calculadora" replace />} />
      <Route path="/Calculadora" element={<Calculadora />} />
      <Route path="/Background" element={<Background />} />
      <Route path="/Escrever" element={<Escrever />} />
      <Route path="/Ingressos" element={<Ingresso />} />
      <Route path="/Contadores" element={<Contador />} />
      <Route path="*" element={<h1>Página não encontrada!</h1>} />
    </Routes>
  </BrowserRouter>
);
