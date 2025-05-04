import { LucideIcon } from "lucide-react";
import { DarkModeClasses } from "../utils/type";

export interface DarkNightModeStylePropsType {
    darkNightModeStyle: DarkModeClasses;
    darkMode?: boolean
}

export interface UserCardProps {
    image: String,
    darkNightModeStyle: DarkModeClasses,
    name: string,
    email: string,
    type: string
}
export interface StatsCardProps {
    label: string;
    number: number | string;
    duration?: string;
    statsCount?: string;
    statsStatus?: "lose" | "profit" | undefined;
    Icon: LucideIcon;
}