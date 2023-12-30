
"use client"
import React, { createContext, useContext, useState } from 'react'
import { IOrder } from "./model"
interface IProp {
    loading: boolean;
    orders: IOrder[];
    getOrders: () => void;
    updateOrder: (value: IOrder, orderId: string) => void;

}
const OrderContext = createContext<IProp>({
    loading: false,
    orders: [] || null,
    getOrders() { },
    updateOrder(value, orderId) {
        return null
    }

})
export const useOrderContext = () => {
    let context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const OrderProvder: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [orders, setOrders] = useState<IOrder[]>([])

    const getOrders = async () => {
        setLoading(true)
        try {
            const response = await fetch("http://localhost:5000/api/orders", {
                method: "GET",
                headers: { "Content-type": "application/json" },
            });
            setLoading(false)

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to create menu: ${errorMessage}`);
            }
            const newData = await response.json();
            setOrders(newData);
            // toast.success("Product Successfully Created");

            return newData;
        } catch (err) {
            console.error("Error creating Menu:", err);
            // toast.error(err as any)
        }
    };
    const updateOrder = async (values: IOrder, orderId: string) => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:5000/api/menuItems/${orderId}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });
            setLoading(false)

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to update menu: ${errorMessage}`);
            }
            const updatedOrder = await response.json();
            setOrders(updatedOrder)
            // setOrders((prevMenus) =>
            //     prevMenus.map((menu) => (menu?._id === menuId ? updatedMenu : menu)));
        } catch (err) {
            console.error("Error creating Menu:", err);
            // toast.error(err as any)
        }
    };

    // const deleteMenu = async (menuId: any) => {
    //     setLoading(true)
    //     try {
    //         const response = await fetch(`http://localhost:5000/api/menuItems/${menuId}`, {
    //             method: "DELETE",
    //             headers: { "Content-type": "application/json" },
    //         });
    //         setLoading(false)

    //         if (!response.ok) {
    //             const errorMessage = await response.text();
    //             throw new Error(`Failed to update menu: ${errorMessage}`);
    //         }
    //         // toast.success("Product Successfully Delete");
    //     } catch (err) {
    //         console.error("Error creating Menu:", err);
    //         // toast.error(err as any)
    //     }
    // };

    // // @Get all the menu
    // const getMenus = async () => {
    //     setLoading(true)
    //     try {
    //         const response = await fetch("http://localhost:5000/api/menuItems", {
    //             method: "GET",
    //             headers: { "Content-Type": "application/json" }
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const data = await response.json();
    //         setMenus(data);
    //         setLoading(false)

    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    return (
        <OrderContext.Provider
            value={{
                loading,
                orders,
                getOrders,
                updateOrder,

            }}>
            {children}

        </OrderContext.Provider>
    )
}