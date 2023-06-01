import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllCategories from './Component/AllCategories'
import Header from './Component/Header'
import ListPage from './Component/ListPage'
import Home from './Pages/Home'
import Footer from './Component/Footer'

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/all-categories' element={<AllCategories />} />
                    <Route path='/all-list' element={<ListPage />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing