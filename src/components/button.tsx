import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import { ReactNode } from 'react';

interface CustomButtonProps extends AntButtonProps {
    label?: string | ReactNode;
    labelStyle?: string,
    className?: string;
}

const Button = ({
    label,
    labelStyle,
    className,
    type = 'primary',
    loading = false,
    ...rest
}: CustomButtonProps) => {
    return (
        <AntButton
            type={type}
            className={className}
            loading={loading}
            {...rest}
        >
            <label className={labelStyle} >{label}</label>
        </AntButton>
    );
};

export default Button;
