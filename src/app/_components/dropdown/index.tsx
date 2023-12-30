import React from 'react';
import { Select } from 'antd';

const onChange = (value: string) => {
    console.log(value);
};

// const onSearch = (value: string) => {
//     console.log('search:', value);
// };

// Filter `option.label` match the user type `input`
const filterOption = (input: string, option?: { label: string; value: string }) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

interface IProps {
    value: string
    size?: "small" | "middle" | "large"
}

export const SelectorComponent = ({ value, size = "middle" }: IProps) => (
    <Select
        // showSearch
        defaultValue={value}
        optionFilterProp="children"
        onChange={onChange}
        // onSearch={onSearch}
        size={size}
        filterOption={filterOption}
        dropdownStyle={{ width: 100 }}
        options={[
            {
                value: 'All',
                label: 'All',
            },
            {
                value: 'Pending',
                label: 'Pending',
            },
            {
                value: 'Rejected',
                label: 'Rejected',
            },
            {
                value: 'Canceled',
                label: 'Canceled',
            },
        ]}
    />
);
