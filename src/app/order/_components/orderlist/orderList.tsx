"use client"
import React, { useEffect, useState } from 'react'
import { useOrderContext } from '../../context'
import { TableComponent } from '../table'
import { InputSearchComponent } from '@/app/_components/input/searchInput'
import { SelectorComponent } from '@/app/_components/dropdown'



export const OrderLists = () => {
    const { orders, getOrders, loading } = useOrderContext()
    const [search, setSearch] = useState()

    console.log(orders, "the data")
    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className="mt-10">
            <div className="my-4 flex gap-6">
                <div className="w-[23rem]">
                    <InputSearchComponent
                        value={search}
                        placeholder="Search by Name or Price"
                        handleOnSearch={(e: any) => {
                            setSearch(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                </div>
                <div className="w-[20rem]">
                    <SelectorComponent value="All" size='large' />
                </div>

            </div>


            <TableComponent
                data={orders}
                loading={loading}
            />
        </div>



    )
}


