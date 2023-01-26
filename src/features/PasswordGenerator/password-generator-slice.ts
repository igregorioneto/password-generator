import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PasswordGeneratorState {
  randomPassword: string;
  strengthValue: number;
}

interface PayloadState {
  slider: number | number[];
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const initialState: PasswordGeneratorState = {
  randomPassword: '',
  strengthValue: 1
}

export const passwordGeneratorSlice = createSlice({
  name: "password-generator",
  initialState,
  reducers: {
    generatePassword: (state, action: PayloadAction<PayloadState>) => {
      const { slider, uppercase, lowercase, numbers, symbols } = action.payload;

      let numbersChars = "0123456789";
      let symbolsChars = "!@#$%^&*()+?><:{}[]";
      let uppercaseChars = "ABCDEFGHIJLMNOPQRSTUVWXYZ";
      let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";

      let password = "";

      for (let i = 0; i < Number(slider); i++) {
        if (uppercase && password.length < Number(slider)) {
          let randomChar = Math.floor(Math.random() * Number(slider));
          password += uppercaseChars.substring(randomChar, randomChar + 1);
        }

        if (lowercase && password.length < Number(slider)) {
          let randomChar = Math.floor(Math.random() * Number(slider));
          password += lowercaseChars.substring(randomChar, randomChar + 1);
        }

        if (numbers && password.length < Number(slider)) {
          let randomChar = Math.floor(Math.random() * Number(slider));
          password += numbersChars.substring(randomChar, randomChar + 1);
        }

        if (symbols && password.length < Number(slider)) {
          let randomChar = Math.floor(Math.random() * Number(slider));
          password += symbolsChars.substring(randomChar, randomChar + 1);
        }
      }

      console.log(password);
      
    }
  }
});

export const { generatePassword } = passwordGeneratorSlice.actions;
export const passwordGeneratorReducer = passwordGeneratorSlice.reducer;