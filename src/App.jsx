import { useState } from 'react'
import './App.css'
import './Pages/Pokemon.jsx'
import { PokemonSearch } from './Pages/Pokemon.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router'
import PokemonCard from './Components/pokemonComponent.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PokemonSearch />
    },
    {
      path: '/pokemon',
      element: <PokemonCard />
    }
  ])
  return <RouterProvider router={router} /> 
}
export default App
