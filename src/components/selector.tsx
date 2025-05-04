import { Select as AntSelect } from 'antd';
import type { SelectProps } from 'antd';

interface CustomSelectProps extends SelectProps<any> {
    label?: string;
    labelStyle?: string,
    className?: string;
}

const Select = ({ label, labelStyle, className, style, ...rest }: CustomSelectProps) => (
    <div className={className}>
        {label && <label className={labelStyle} >{label}</label>}
        <AntSelect
            className='w-full'
            {...rest}
        />
    </div>
);

export default Select;
