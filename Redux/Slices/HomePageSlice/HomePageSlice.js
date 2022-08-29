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
    rate:[0,100000],
    years : [1990,2022],
    transmissionType : [],
    interiorColorType : [],
    exteriorColorType : [],
    driveTrainType : [],
    FuelType : [],
    interiorFeatures : [],
    techFeatures : [],
    safFeature : [],
    otherFet :[],
    extFeatures :[],
    modelType :[],
}



export const fetchCars = createAsyncThunk('homePage/fetch', async (page, { getState }) => {
    const state = getState().HomePageSlice;
    const url = `https://autodigg.com/ad-api/cars/list?body_type=${state.bodyTypesCars}&model=${state.modelType}&year_from=${state.years[0]}&year_to=${state.years[1]}&price_from=${state.rate[0]}&price_to=${state.rate[1]}&make=${state.makeCars}&car_type=Certified+pre-owned,${state.newUsed.length > 1 ? state.newUsed.join(",") : "Used+car,New+car"}&page=${state.page}&radius=${state.radius}${state.exteriorColorType.length>0 ? `&exterior_color=${state.exteriorColorType}`: ""}${state.interiorColorType.length>0 ? `&interior_color=${state.interiorColorType}`: ""}${state.transmissionType.length>0 ? `&transmission=${state.transmissionType}`: ""}${state.driveTrainType.length>0 ? `&drivetrain=${state.driveTrainType}`: ""}${state.FuelType.length>0 ? `&fuel_type=${state.FuelType}`: ""}`
    const countUrl = `https://autodigg.com/ad-api/cars/list?body_type=${state.bodyTypesCars}&model=${state.modelType}&year_from=${state.years[0]}&year_to=${state.years[1]}&price_from=${state.rate[0]}&price_to=${state.rate[1]}&make=${state.makeCars}&car_type=Certified+pre-owned,${state.newUsed.length > 1 ? state.newUsed.join(",") : "Used+car,New+car"}&page=${state.page}&radius=${state.radius}${state.exteriorColorType.length>0 ? `&exterior_color=${state.exteriorColorType}`: ""}${state.interiorColorType.length>0 ? `&interior_color=${state.interiorColorType}`: ""}${state.transmissionType.length>0 ? `&transmission=${state.transmissionType}`: ""}${state.driveTrainType.length>0 ? `&drivetrain=${state.driveTrainType}`: ""}${state.FuelType.length>0 ? `&fuel_type=${state.FuelType}`: ""}&return=count`
    const bodyTypeUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=body_type`
    const extColUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=exterior_color`
    const intColUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=interior_color`
    const transUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=transmission`
    const dTrainUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=drivetrain`
    const fuelTypeUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=fuel_type`
    const featureUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=features`
    const modelUrl = `https://autodigg.com/ad-api/cars/list?&make=${state.makeCars}&return=model`
    try {
        const data = await axios.all([
            axios.get(url),
            axios.get(countUrl),
            axios.get(modelUrl),
            axios.get(bodyTypeUrl),
            axios.get(extColUrl),
            axios.get(intColUrl),
            axios.get(transUrl),
            axios.get(dTrainUrl),
            axios.get(fuelTypeUrl),
            axios.get(featureUrl),
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
        },
        setYears : (state , action)=>{
            state.years = action.payload
        },
        setTransmissionType : (state , action)=>{
            state.transmissionType = action.payload
        },
        setInteriorColorType : (state , action)=>{
            state.interiorColorType = action.payload
        },
        setExteriorColorType : (state , action)=>{
            state.exteriorColorType = action.payload
        },
        setDriveTrainType : (state , action)=>{
            state.driveTrainType = action.payload
        },
        setFuelType : (state , action)=>{
            state.FuelType = action.payload
        },
        setInteriorFeatures : (state , action)=>{
            state.interiorFeatures = action.payload
        },
        setTechFeatures : (state , action)=>{
            state.techFeatures = action.payload
        },
        setSafFeature : (state , action)=>{
            state.safFeature = action.payload
        },
        setExtFeature : (state , action)=>{
            state.extFeatures = action.payload
        },
        setOtherFet : (state , action)=>{
            state.otherFet = action.payload
        },
        setModelType : (state , action)=>{
            state.modelType = action.payload
        },
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
            state.model = action.payload[2].data
            state.bodyType = action.payload[3].data
            state.exteriorColor = action.payload[4].data
            state.interiorColor = action.payload[5].data
            state.transmission = action.payload[6].data
            state.driveTrain = action.payload[7].data
            state.fuelType = action.payload[8].data
            state.features = action.payload[9].data
        },
        [fetchCars.rejected]: (state, action) => {
            state.loading = false
            state.message = "No Cars To Display....."
        },

    }
});


export const { setModelType,setExtFeature , setOtherFet,setSafFeature,setTechFeatures,setInteriorFeatures, setTransmissionType ,setInteriorColorType ,setExteriorColorType ,setDriveTrainType ,setFuelType ,setYears,setRate,setBodyTypesCars ,setMakeCars, setRadius, setNewUsed, paginatedValue, getCars, getCount, getBodyType, getDriveTrain, getExteriorColor, getFeatures, getFuelType, getInteriorColor, getMake, getModel, getTransmission } = HomePageSlice.actions
export default HomePageSlice.reducer;

