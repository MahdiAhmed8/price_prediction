import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateProperty from './pages/CreateProperty';
import ShowProperty from './pages/ShowProperty';
import EditProperty from './pages/EditProperty';
import DeleteProperty from './pages/DeleteProperty';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/properties/create' element={<CreateProperty />} />
      <Route path='/properties/details/:id' element={<ShowProperty />} />
      <Route path='/properties/edit/:id' element={<EditProperty />} />
      <Route path='/properties/delete/:id' element={<DeleteProperty />} />
    </Routes>
  )
}

export default App