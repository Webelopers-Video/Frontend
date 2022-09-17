import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from '../scenes/landing'
import { Events } from '../scenes/events/events'
import { Professors } from '../scenes/professors/professors'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/events" element={<Events />} />
        <Route path="/professors" element={<Professors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
