import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type UserState = {
    name?: string
    email?: string
}

const initialState: UserState = {
    name: '',
    email: '',
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/user`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.email = action.payload?.email
            state.name = action.payload?.name
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
