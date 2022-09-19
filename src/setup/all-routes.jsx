import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from '../scenes/landing'
import { Events } from '../scenes/events/events'
import { Professors } from '../scenes/professors/professors'
import Event from '../scenes/events/event'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="events" element={<Events />}>
        </Route>
          <Route path="events/test" element={<Event />} />
        <Route path="professors" element={<Professors />} />
      </Routes>

    </BrowserRouter>
  )
}

export default AllRoutes
