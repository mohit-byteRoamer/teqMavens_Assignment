import { Input as AntInput } from 'antd';
import type { InputProps as AntdInputProps } from 'antd';

interface InputProps extends AntdInputProps {
    label?: string;
    labelStyle?: string;
    className?: string;
}

const Input = ({ label, labelStyle, className, ...rest }: InputProps) => (
    <div className={className}>
        {label && <label className={labelStyle} >{label}</label>}
        <AntInput
            {...rest}
        />
    </div>
);

export default Input;
