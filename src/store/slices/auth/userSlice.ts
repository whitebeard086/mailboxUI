import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'
import { User } from '@/types/models'

export type UserState = {
    user: Partial<User>
}

const initialState: UserState = {
    user: {}
}

const userSlice = createSlice({
    name: `${SLICE_BASE_NAME}/profile`,
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | Partial<User>>) {
            state.user = action.payload
        },
    },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
