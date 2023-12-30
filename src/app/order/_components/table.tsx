"use client"
import React from 'react'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICart, IOrder } from '../model';
import { SelectorComponent } from '@/app/_components/dropdown';
import ButtonComponent from '@/app/_components/button';

interface DataType {
    key: string;
    _id?: string;
    totalAmount: string;
    status: string;
    cart?: ICart[]
}


interface IProps {
    data: any[]
    loading: boolean
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'OrderLength',
        dataIndex: 'orderLength',
        key: 'orderLength',
        render: (_, record) => (
            <h4 className='text-center'>{record?.cart?.length}</h4>
        ),
    },
    {
        title: 'TotalAmount',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, record) => (
            <div className='w-20'>
                <SelectorComponent value={record?.status} />
            </div>
        ),
    },

    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        render: (_, record) => (
            <div>
                <ButtonComponent>
                    Detials
                </ButtonComponent>
            </div>
        ),
    },


];

export const TableComponent: React.FC<IProps> = ({ data, loading }) => {

    return (
        <Table
            tableLayout="fixed"
            size="middle"
            columns={columns}
            dataSource={data}
            loading={loading}
        />
    )
}



