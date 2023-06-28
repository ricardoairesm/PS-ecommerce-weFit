import './Assets/CSS/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrinho from './Pages/Cart'
import Home from './Pages/home'
import Success from './Pages/Success'
import { useState, useEffect } from 'react'
import Context from './Pages/Context'
import { useMovies } from './Hooks/useMovies'

const App = () => {
  const [selectedMoviesId, setSelectedMoviesId] = useState([])
  const { movieList, getAll } = useMovies()
  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <>
      <Context.Provider value={[selectedMoviesId, setSelectedMoviesId, movieList]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}
export default App
