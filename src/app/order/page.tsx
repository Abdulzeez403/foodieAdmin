"use client"

import React, { useEffect } from 'react'
import { OrderDetail } from './detail'
import { useOrderContext } from './context'

const OrderPage = () => {

    return (
        <div className="mx-4">
            <OrderDetail />
        </div>
    )
}
export default OrderPage;

