"use client"
import React from 'react'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ICart, IOrder } from '../model';
import { SelectorComponent } from '@/app/_components/dropdown';
import ButtonComponent from '@/app/_components/button';
import { useOrderContext } from '../context';
import "./table.css"

interface DataType {
    key?: string;
    _id: string;
    name: string;
    totalAmount: string;
    orderLength: string;
    status: string;
    cart?: ICart[]
}


interface IProps {
    data: any
    loading: boolean
}



export const TableComponent: React.FC<IProps> = ({ data, loading }) => {

    const { updateOrder } = useOrderContext()

    const handleUpdateOrder = (id: any, values: IOrder) => {
        const payload = { ...values }
        updateOrder(payload, id)
    }


    const getStatusColorClass = (status: string) => {
        switch (status) {
            case 'Pending':
                return 'pending-status';
            case 'Confirmed':
                return 'confirmed-status';
            case 'Delivered':
                return 'delivered-status';
            case 'Cancelled':
                return 'cancelled-status';
            case 'Rejected':
                return 'rejected-status';
            default:
                return '';
        }
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
                <h4>{record?.cart?.length}</h4>
            ),
        },
        {
            title: 'TotalAmount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
        },

        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => (
                <h4 className={`font-mono ${getStatusColorClass(record?.status)}`}>{record?.status}</h4>
            )
        },

        {
            title: 'Actions',
            key: 'action',
            dataIndex: 'action',
            render: (_, record) => (
                <div className="flex gap-4 items-center">
                    <div>
                        <ButtonComponent>
                            Detials
                        </ButtonComponent>
                    </div>
                    <div className='w-20'>
                        <SelectorComponent value={record?.status}
                            updateStatus={() => handleUpdateOrder(record?._id, record as any)}
                        />
                    </div>
                </div>

            ),
        },


    ];

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



