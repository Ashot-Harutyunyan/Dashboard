import { configureStore } from '@reduxjs/toolkit'
import scheduleDataSliceReducer from "./scheduleDataSlice";

const store = configureStore({
    reducer: {
        scheduleData: scheduleDataSliceReducer
    }
})

export default store