import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Men } from "./men";
import {Women} from './women'

export const store = configureStore({
    reducer:{
        Men,
        Women
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
})