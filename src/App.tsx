import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from '@theme/ThemeContext';
import Header from '@layouts/header';
import Content from '@layouts/content';
import { BLACK_COLOR, DODGER_BLUE_COLOR, MEDIUM_SLATE_BLUE_COLOR, RICH_NAVY_COLOR, WHITE_COLOR } from '@theme/colors';

function App() {
    const { darkMode } = useTheme();

    return (
        <ConfigProvider
            theme={{
                algorithm: darkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                token: {
                    colorPrimary: darkMode ? MEDIUM_SLATE_BLUE_COLOR : DODGER_BLUE_COLOR,
                    colorBgContainer: darkMode ? RICH_NAVY_COLOR : WHITE_COLOR,
                    colorText: darkMode ? WHITE_COLOR : BLACK_COLOR,
                },
            }}
        >
            <div className={`${darkMode ? 'bg-veryDarkBlue text-white' : 'bg-veryLightGray text-black'}  transition-colors`}>
                <Header />
                <Content />
            </div>
        </ConfigProvider>
    );
}

export default App;
