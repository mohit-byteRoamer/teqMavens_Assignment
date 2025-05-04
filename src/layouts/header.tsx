import React, { useCallback } from "react";
import { Moon, Search, Sun } from "lucide-react";
import { Row, Segmented } from "antd";
import Input from "@components/input";
import Switch from "@components/switch";
import { useTheme } from "@theme/ThemeContext";
import { getDarkModeClasses } from "@utils/global-func";

const Header: React.FC = () => {
    const { darkMode, setDarkMode } = useTheme();

    const darkNightModeStyle = React.useMemo(() => getDarkModeClasses(darkMode), [darkMode]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prev) => !prev);
    }, [setDarkMode]);

    return (
        <div>
            <Row
                className={`flex p-3 py-3 border-b transition-colors duration-100 ease-in-out ${darkNightModeStyle.bg} ${darkNightModeStyle.border}`}
            >
                <div className={`w-[45%] flex items-center font-bold text-lg ${darkNightModeStyle.text}`}>
                    Admin <span className="text-primary ml-2">Panel</span>
                </div>

                <div className="w-[55%] flex justify-between items-center gap-3">
                    <Input
                        className="!w-[65%]"
                        placeholder="Search..."
                        size="middle"
                        prefix={<Search size={16} className="text-gray-500" />}
                    />
                    <Switch
                        className="flex pt-0.5"
                        value={darkMode}
                        onChange={toggleDarkMode}
                        checkedChildren={<Sun size={16} />}
                        unCheckedChildren={<Moon size={16} />}
                    />
                </div>
            </Row>
            <Row
                justify="end"
                className={`p-3 py-2.5 border-b transition-colors duration-100 ease-in-out ${darkNightModeStyle.bg} ${darkNightModeStyle.border}`}
            >
                <Segmented options={['Daily', 'Week', 'Year']} />
            </Row>
        </div>
    );
};

export default Header;
