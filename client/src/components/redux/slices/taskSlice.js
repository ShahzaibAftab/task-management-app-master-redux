import { createSlice } from "@reduxjs/toolkit";

const manageTask = createSlice({
    name: 'Task',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
            console.log('added state', state[0])
        },
        getTask: (state, action) => {
            console.log('state', state)
            const { id } = action.payload;
            const findId = state.find((obj) => obj.id === id)
            console.log('findId', findId)
            if (findId) {
                return findId;
            }

            return state;
        }

    }
})
export const selectTaskById = (state, id) => {
    return state[0].filter((task) => task.id === id);
}

export const { addTask, getTask } = manageTask.actions;
export default manageTask.reducer;