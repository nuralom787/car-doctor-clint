import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Main from './Routes/Main/Main'
import Home from './Routes/Home/Home'
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'
import NotFound from './Routes/NotFound/NotFound'
import AuthProvider from './Provider/AuthProvider'
import Details from './Routes/Details/Details'
import Checkout from './Routes/Checkout/Checkout'
import Bookings from './Routes/Bookings/Bookings'
import PrivetRoute from './Routes/PrivetRoute/PrivetRoute'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/details/service/:title/:id' element={<Details />}></Route>
              <Route path='/checkout/service/:title/:id' element={<PrivetRoute><Checkout /></PrivetRoute>}></Route>
            </Route>
            <Route path='/bookings' element={<PrivetRoute><Bookings /></PrivetRoute>}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
