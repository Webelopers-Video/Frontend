import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from '../scenes/landing'
import { Events, Event } from '../scenes/events'
import { Professors } from '../scenes/professors/professors'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="events" element={<Events />} />
        {/* FIXME this needs to be modified to redirect every thing to this */}
        <Route path="events/datadays" element={<Event />} />
        <Route path="professors" element={<Professors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes
