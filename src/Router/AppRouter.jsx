import {Navigate, Route, Routes} from 'react-router-dom'
import Home from "../Components/Home"
import Products from "../Components/Products"
import Login from "../Components/Login"
import Account from "../Components/Account"
import NotFound from "../Components/NotFound"


function AppRouter() {
  return (
    <>
    <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/" element={<Navigate to ="/home" />} />
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default AppRouter