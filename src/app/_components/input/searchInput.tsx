import React, { ChangeEvent } from 'react';
import { Input } from 'antd';


interface IProps {
    value?: any
    handleOnSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
}



export const InputSearchComponent: React.FC<IProps> = ({ value, handleOnSearch, placeholder }) => (
    <Input
        value={value}
        placeholder={placeholder}
        size="large"
        allowClear
        onChange={handleOnSearch} />
);
