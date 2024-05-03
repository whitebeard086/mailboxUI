import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type CommonState = {
    messages: []
}

export const initialState: CommonState = {
    messages: [],
}

export const commonSlice = createSlice({
    name: `${SLICE_BASE_NAME}/common`,
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<[]>) => {
            state.messages = action.payload
        },
    },
})

export const { 
    setMessages,
} = commonSlice.actions

export default commonSlice.reducer
