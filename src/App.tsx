import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Cadastro from './paginas/Cadastro';
import HomeUser from './paginas/HomeUser';
import Inicial from './paginas/Inicial';
import Login from './paginas/Login';
import Mensagem from './paginas/Mensagem';
import PerfilUsuario from './paginas/PerfilUsuario';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Inicial />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/adotar' element={<HomeUser />}/>
        <Route path='/mensagem' element={<Mensagem />}/>
        <Route path='/perfil' element={<PerfilUsuario />}/>
      </Routes>
  );
}

export default App;
