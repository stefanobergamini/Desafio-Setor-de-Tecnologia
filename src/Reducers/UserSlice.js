import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "admin",
    password: "admin",
    isLoggedIn: localStorage.getItem("token"),
    listPeople: localStorage.hasOwnProperty("peoples") ? JSON.parse(localStorage.getItem("peoples")) : []
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
    updatePerson: (state, action) => {
      state.listPeople = state.listPeople.map(
        (content, i) => i === action.payload.index ? { ...content, name: action.payload.name, lastName: action.payload.lastName, cpf: action.payload.cpf } : content
      )
    }
  },
})

export const { login, logout, addPerson, removePerson, updatePerson } = userSlice.actions

export default userSlice.reducer