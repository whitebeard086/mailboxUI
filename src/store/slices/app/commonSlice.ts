import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SLICE_BASE_NAME } from './constants';
import { MessagesResponse } from '@/services/types';
import { Message } from '@/types/models';

export type CommonState = {
    messageData: Partial<MessagesResponse>;
    messages: Message[] | [];
    message: Partial<Message>;
};

export const initialState: CommonState = {
    messageData: {},
    messages: [],
    message: {},
};

export const commonSlice = createSlice({
    name: `${SLICE_BASE_NAME}/common`,
    initialState,
    reducers: {
        setMessages: (state, action: PayloadAction<Message[] | []>) => {
            state.messages = action.payload;
        },
        setMessage: (state, action: PayloadAction<Partial<Message>>) => {
            state.message = action.payload;
        },
        setMessageData: (
            state,
            action: PayloadAction<Partial<MessagesResponse>>
        ) => {
            state.messageData = action.payload;
        },
    },
});

export const { setMessages, setMessage, setMessageData } = commonSlice.actions;

export default commonSlice.reducer;
