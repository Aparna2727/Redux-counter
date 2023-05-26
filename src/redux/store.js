import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from '../components/counter/counterSlice'
import  Counter  from '../components/counter/counter'

const store = configureStore({
    reducer:{
        counter:counter,
    }
})

export default store