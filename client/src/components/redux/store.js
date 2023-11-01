import { configureStore } from '@reduxjs/toolkit'
import manageTask from './slices/taskSlice';

export const store = configureStore({
    reducer: {
        manageTask
    },
});