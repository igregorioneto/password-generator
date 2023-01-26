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

      const strongPassword = [uppercase, lowercase, numbers, symbols];

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
      
      let count = 1;
      for (let i = 0; i < strongPassword.length; i++) {
        if(strongPassword[i]) {
          if((count === 1 || count === 2) || Number(slider) <= 5) state.strengthValue = 1;
          if(count === 2 && Number(slider) <= 8 && Number(slider) > 5) state.strengthValue = 2;
          if(count === 3 && Number(slider) <= 10) state.strengthValue = 3;
          if(count === 4 && Number(slider) > 10) state.strengthValue = 4;
        }
      }
      
    }
  }
});

export const { generatePassword } = passwordGeneratorSlice.actions;
export const passwordGeneratorReducer = passwordGeneratorSlice.reducer;