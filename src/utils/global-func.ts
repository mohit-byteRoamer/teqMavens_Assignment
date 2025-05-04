import { DarkModeClasses } from "./type";

export const getDarkModeClasses = (isDarkMode: boolean): DarkModeClasses => ({
    bg: isDarkMode ? "bg-richBlack" : "bg-white",
    bgLGray: isDarkMode ? "bg-veryDarkBlue" : "bg-[#f6f8f9]",
    text: isDarkMode ? "text-white" : "text-black",
    border: isDarkMode ? "border-gunmetal" : undefined,
});
