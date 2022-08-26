import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from 'next-redux-wrapper'



const initialState = {
    isLoading: false,
    isSuccess: false,
    cars: [],
    count: 0,
    make: null,
    model: null,
    bodyType: null,
    exteriorColor: null,
    interiorColor: null,
    transmission: null,
    driveTrain: null,
    fuelType: null,
    features: null,
    page: "1",
    message: "",
    newUsed: [],
    radius: 100,
    makeCars : [],
    bodyTypesCars :[],
    rate:[10000,30000],

}





export const fetchCars = createAsyncThunk('homePage/fetch', async (page, { getState }) => {
    const state = getState().HomePageSlice;
    const url = `https://autodigg.com/ad-api/cars/list?body_type=${state.bodyTypesCars}&price_from=${state.rate[0]}&price_to=${state.rate[1]}&make=${state.makeCars}&car_type=Certified+pre-owned,${state.newUsed.length > 1 ? state.newUsed.join(",") : "Used+car,New+car"}&page=${state.page}&radius=${state.radius}`
    const countUrl = `https://autodigg.com/ad-api/cars/list?body_type=${state.bodyTypesCars}&price_from=${state.rate[0]}&price_to=${state.rate[1]}&make=${state.makeCars}&car_type=Certified+pre-owned,${state.newUsed.length > 1 ? state.newUsed.join(",") : "Used+car,New+car"}&page=${state.page}&radius=${state.radius}&return=count`
    try {
        const data = await axios.all([
            axios.get(url),
            axios.get(countUrl)
        ])
        return data
    } catch (error) {
        console.log(error)
    }
});



const HomePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        paginatedValue: (state, action) => {
            state.page = action.payload
        },
        getCars: (state, action) => {
            state.cars = action.payload
        },
        getCount: (state, action) => {
            state.count = action.payload
        },
        getMake: (state, action) => {
            state.make = action.payload
        },
        getModel: (state, action) => {
            state.model = action.payload
        },
        getBodyType: (state, action) => {
            state.bodyType = action.payload
        },
        getExteriorColor: (state, action) => {
            state.exteriorColor = action.payload
        },
        getInteriorColor: (state, action) => {
            state.interiorColor = action.payload
        },
        getTransmission: (state, action) => {
            state.transmission = action.payload
        },
        getFuelType: (state, action) => {
            state.fuelType = action.payload
        },
        getDriveTrain: (state, action) => {
            state.driveTrain = action.payload
        },
        getFeatures: (state, action) => {
            state.features = action.payload
        },
        setNewUsed: (state, action) => {
            state.newUsed = action.payload
        },
        setRadius: (state, action) => {
            state.radius = action.payload
        },
        setMakeCars : (state , action)=>{
            state.makeCars = action.payload
        },
        setBodyTypesCars : (state,action)=>{
        state.bodyTypesCars = action.payload
        },
        setRate : (state , action)=>{
            state.rate = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.cars = action.payload.HomePageSlice.cars
            state.count = action.payload.HomePageSlice.count
            state.make = action.payload.HomePageSlice.make
            state.bodyType = action.payload.HomePageSlice.bodyType
            state.model = action.payload.HomePageSlice.model
            state.exteriorColor = action.payload.HomePageSlice.exteriorColor
            state.interiorColor = action.payload.HomePageSlice.interiorColor
            state.driveTrain = action.payload.HomePageSlice.driveTrain
            state.transmission = action.payload.HomePageSlice.transmission
            state.fuelType = action.payload.HomePageSlice.fuelType
            state.features = action.payload.HomePageSlice.features
        },
        [fetchCars.pending]: (state, action) => {
            state.loading = true
        },
        [fetchCars.fulfilled]: (state, action) => {
            state.loading = false
            state.cars = action.payload[0].data
            state.count = action.payload[1].data.count
        },
        [fetchCars.rejected]: (state, action) => {
            state.loading = false
        },

    }
});


export const {setRate,setBodyTypesCars ,setMakeCars, setRadius, setNewUsed, paginatedValue, getCars, getCount, getBodyType, getDriveTrain, getExteriorColor, getFeatures, getFuelType, getInteriorColor, getMake, getModel, getTransmission } = HomePageSlice.actions
export default HomePageSlice.reducer;

