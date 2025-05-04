import UserCard from "../components/userCard"
import Social from "../components/social"
import BussinessForm from "../components/bussinessForm"
import { DarkNightModeStylePropsType } from "../../type";

const ContentLeftSection = ({ darkNightModeStyle }: DarkNightModeStylePropsType) => {
    return <div className=" flex flex-col gap-4">
        {/* USER CARD */}
        <UserCard darkNightModeStyle={darkNightModeStyle} name={"Truck Grear"} email={"mohit878421@gmail.com"} type={"BUSINESS"} />
        {/* SOCIAL CARD */}
        <Social darkNightModeStyle={darkNightModeStyle} />
        {/* BUSSINESS  FORM */}
        <BussinessForm darkNightModeStyle={darkNightModeStyle} />
    </div>
}

export default ContentLeftSection