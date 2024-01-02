import React from 'react';
import { Select } from 'antd';

// const onChange = (value: string) => {
//     console.log(value);
// };

// const onSearch = (value: string) => {
//     console.log('search:', value);
// };

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

interface IProps {
    value: string
    size?: "small" | "middle" | "large",
    updateStatus?: () => void;
    className?: string
}

export const SelectorComponent = ({ value, size = "middle", updateStatus, className }: IProps) => (
    <Select
        // showSearch
        defaultValue={value}
        optionFilterProp="children"
        onChange={updateStatus}
        // onSearch={onSearch}
        size={size}
        filterOption={filterOption}
        className={className}
        dropdownStyle={{ width: 100 }}
        options={[
            {
                value: 'Pending',
                label: 'Pending',
            },
            {
                value: 'Rejected',
                label: 'Rejected',
            },
            {
                value: 'Confirmed',
                label: 'Confirmed',
            },
            {
                value: 'Delivered',
                label: 'Delivered',
            },
        ]}
    />
);
