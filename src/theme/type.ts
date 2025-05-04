import { Dispatch, SetStateAction } from "react";

export interface ThemeContextType {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
  }