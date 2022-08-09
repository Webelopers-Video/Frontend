import { combineReducers } from '@reduxjs/toolkit'

import homeReducer from '../../scenes/_slice/landing.slice'
// import userReducer from '../../scenes/_slice/user.slice'

const rootReducer = combineReducers({
  home: homeReducer,
  // user: userReducer,
})
export default rootReducer
