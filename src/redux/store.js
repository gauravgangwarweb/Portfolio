import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import hideReducer from './hide.js'
import selectedPrjReducer from './selectedPrj.js'

export const store = configureStore({
    reducer: {
        hide: hideReducer,
        selectedPrj: selectedPrjReducer
    }
})

setupListeners(store.dispatch)