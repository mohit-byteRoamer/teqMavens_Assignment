import { useTheme } from "@theme/ThemeContext";
import { getDarkModeClasses } from "@utils/global-func";
import ContentLeftSection from "./sections/left-section";
import ContentRightSection from "./sections/right-section";

const Content = () => {
    const { darkMode } = useTheme();

    const darkNightModeStyle = getDarkModeClasses(darkMode)

    return <div className="overflow-scroll flex p-4 gap-4">
        {/* L E F T  S E C T I O N */}
        <ContentLeftSection darkNightModeStyle={darkNightModeStyle} />

        {/* R I G H T  S E C T I O N */}
        <ContentRightSection darkMode={darkMode} darkNightModeStyle={darkNightModeStyle} />
    </div >
}
// 482


export default Content