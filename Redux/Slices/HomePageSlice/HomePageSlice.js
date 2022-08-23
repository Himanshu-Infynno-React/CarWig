import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    isSuccess: false,
    cars: [],
    message: "",
}
export const fetchCars = createAsyncThunk('homePage/fetch', () => {
    const url = `https://autodigg.com/ad-api/cars/list?usedCar=true&car_type=Used+car&page=1&radius=100`
    try {
        const data = axios.get(url);
        return data;
    } catch (error) {
        console.log(error)
    }
});



const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(
                fetchCars.pending, (state, action) => {
                    state.isLoading = true;
                }
            )
            .addCase(
                fetchCars.fulfilled, (state, action) => {
                    // console.log(action.payload.data)
                    state.isLoading = false;
                    state.message = "false";
                    state.cars = action.payload.data;
                    state.isSuccess = true;
                }
            )
            .addCase(
                fetchCars.rejected, (state, action) => {
                    state.isLoading = false;
                    state.message = action.payload;
                    state.isSuccess = false;
                }
            )
    }
});


export default HomePageSlice.reducer;

