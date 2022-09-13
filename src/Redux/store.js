import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { Men } from "./men";
import {Women} from './women'
import { createForms } from "react-redux-form";
import {InitialLogin} from './login'

export const store = configureStore({
    reducer:{
        Men,
        Women,
        ...createForms({
            login: InitialLogin,

        })
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
})