import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "admin",
    password: "admin",
    isLoggedIn: localStorage.getItem("token"),
    personList: []
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer