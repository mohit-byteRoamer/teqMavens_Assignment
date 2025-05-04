import React from 'react';
import { DatePicker } from 'antd';
import { Dayjs } from 'dayjs';

interface MonthPickerProps {
    value?: Dayjs;
    onChange?: (date: Dayjs) => void;
    className?: string
}

const MonthPicker: React.FC<MonthPickerProps> = ({ value, onChange, className }) => {
    return (
        <div className={className}>
            <DatePicker
                picker="month"
                value={value}
                onChange={(date) => date && onChange?.(date)}
                format="MMM YYYY"
                allowClear={false}
                className="w-full"
                placeholder="Select Month"
            />
        </div>
    );
};

export default MonthPicker;
