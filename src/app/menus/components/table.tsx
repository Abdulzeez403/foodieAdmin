import React from 'react';
import { Popconfirm, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from "next/image"
import { MdDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useMenuContext } from '../context';
import { IImage } from '../model';

interface DataType {
    key: string;
    name: string;
    description: number;
    price: string;
    images: IImage[];
    _id?: string;
    handleUpdateModal: () => void;
}


interface IProps {
    data: any
    loading: boolean
    handleUpdateModal: () => void;

}

const TableComponent = ({ data, loading, handleUpdateModal }: IProps) => {
    const { deleteMenu } = useMenuContext()

    const handleDelete = (id: any) => {
        deleteMenu(id)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Image',
            key: 'image',
            dataIndex: 'image',
            render: (_, record) => (
                <div>
                    <Image src={record?.images?.[0]?.uri} width={50} height={50} alt="image" />
                </div>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <div onClick={() => { handleUpdateModal() }} >
                        <FaRegEdit size={25} color="green"
                        />
                    </div>

                    <Popconfirm
                        title="Are you sure to delete this row?"
                        onConfirm={() => handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <MdDeleteSweep size={35} color="red" />
                    </Popconfirm>
                </Space>
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
export default TableComponent;