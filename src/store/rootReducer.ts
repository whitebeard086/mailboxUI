import { Reducer, UnknownAction, combineReducers } from 'redux'
import auth, { AuthState } from './slices/auth'
import app, { AppState } from './slices/app'

export type RootState = {
    auth: AuthState
    app: AppState
}

export interface AsyncReducers {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: Reducer<any, UnknownAction>
}

const staticReducers = {
    auth,
    app,
}

const rootReducer =
    (asyncReducers?: AsyncReducers) =>
    (state: RootState, action: UnknownAction) => {
        const combinedReducer = combineReducers({
            ...staticReducers,
            ...asyncReducers,
        })
        return combinedReducer(state, action)
    }

export default rootReducer
