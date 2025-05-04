import { TrendingDown, TrendingUp } from 'lucide-react';
import { useTheme } from '@theme/ThemeContext';
import { getDarkModeClasses } from '@utils/global-func';
import { StatsCardProps } from '../../type';

const StatsCard = ({ label, number, duration, statsCount, statsStatus, Icon }: StatsCardProps) => {
    const { darkMode } = useTheme();
    const darkNightModeStyle = getDarkModeClasses(darkMode)

    return (
        <div className={`border w-[300px] rounded-xl shadow-md overflow-hidden ${darkNightModeStyle.bg} ${darkNightModeStyle.border} `}>
            <div className={`flex gap-4 p-4 ${darkNightModeStyle.bgLGray}`}>
                <div className="w-12 h-12 rounded-xl p-[2px] bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400">
                            <Icon size={35} className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs'>{label}</span>
                    <span className='text-xl font-semibold mt-1'>{number}</span>
                </div>
            </div>
            <div className={`flex justify-between p-3 border-t ${darkNightModeStyle.border} `}>
                <div className={`flex items-center justify-end gap-1 text-xs ${statsStatus == "lose" ? 'text-red-500' : 'text-green-500'}`}>
                    {statsStatus == "lose" ? <TrendingDown size={14} /> : <TrendingUp size={14} />}
                    <span>{statsCount}</span>
                </div>
                <span className="text-xs font-medium">{duration}</span>
            </div>
        </div>
    );
};

export default StatsCard;
