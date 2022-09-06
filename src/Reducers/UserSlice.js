import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "admin",
    password: "admin",
    isLoggedIn: localStorage.getItem("token"),
    listPeople: []
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload
    },
    logout: (state, action) => {
      state.isLoggedIn = action.payload
    },
    addPerson: (state, action) => {
      state.listPeople = [...state.listPeople, action.payload];
    },
    removePerson: (state, action) => {
      state.listPeople = [
        ...state.listPeople.slice(0, action.payload),
        ...state.listPeople.slice(action.payload + 1)
      ]
    },
  },
})

export const { login, logout, addPerson, removePerson } = userSlice.actions

export default userSlice.reducer