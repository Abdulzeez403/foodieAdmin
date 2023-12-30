"use client"
import React, { useEffect } from 'react'
import { TableComponent } from './_components/table'
import { IOrder } from './model'
import { useOrderContext } from './context'
import { OrderLists } from './_components/orderlist/orderList'


export const OrderDetail = () => {
    return (
        <OrderLists />
    )
}


