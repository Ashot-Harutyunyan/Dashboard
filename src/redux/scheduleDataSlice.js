import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const scheduleDataFetch = createAsyncThunk('scheduleData/scheduleDataFetch',  async () => {
    const response = await fetch("/JSON/data.json")
    return await response.json()
})

const scheduleDataSlice = createSlice({
    name: 'scheduleData',
    initialState: {
        data: {},
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(scheduleDataFetch.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(scheduleDataFetch.fulfilled, (state, {payload}) => {
            state.status = 'succeeded'
            state.data = payload
        })
        builder.addCase(scheduleDataFetch.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default scheduleDataSlice.reducer