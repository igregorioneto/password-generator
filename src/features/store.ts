import { configureStore } from "@reduxjs/toolkit";
import { passwordGeneratorReducer } from './PasswordGenerator/password-generator-slice';

export const store = configureStore({
  reducer: {
    passwordGenerator: passwordGeneratorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;