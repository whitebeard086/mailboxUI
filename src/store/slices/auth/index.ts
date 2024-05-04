import { combineReducers } from '@reduxjs/toolkit'
import session, { SessionState } from './sessionSlice'
import profile, { UserState } from './userSlice'

const reducer = combineReducers({
    session,
    profile,
})

export type AuthState = {
    session: SessionState
    profile: UserState
}

export * from './sessionSlice'
export * from './userSlice'

export default reducer
