import { createSlice } from "@reduxjs/toolkit";

interface PasswordGeneratorState {
  slider: number; 
  uppercase: boolean; 
  lowercase: boolean; 
  numbers: boolean; 
  symbols: boolean;
}

const initialState: PasswordGeneratorState = {
  slider: 0,
  uppercase: false, 
  lowercase: false, 
  numbers: false, 
  symbols: false,
}

export const passwordGeneratorSlice = createSlice({
  name: "password-generator",
  initialState,
  reducers: {
    generatePassword: (state) => {
      console.log(state);
    }
  }
});

export const { generatePassword } = passwordGeneratorSlice.actions;
export const passwordGeneratorReducer = passwordGeneratorSlice.reducer;