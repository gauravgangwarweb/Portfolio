import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import hideReducer from './hide.js'

export const store = configureStore({
    reducer: {
        hide: hideReducer
    }
})

setupListeners(store.dispatch)