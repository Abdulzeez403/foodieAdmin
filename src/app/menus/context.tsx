

import React, { createContext, useContext, useState } from 'react'
import { IMenu } from './model';

interface IProp {
    loading: boolean;
    menu: IMenu;
    menus: IMenu[];
    addMenu: (value: any) => void,
    getMenus: () => void
    updateMenu: (values: IMenu, menuId: string) => void
    deleteMenu: (menuId: IMenu) => void
}

const MenuContext = createContext<IProp>({
    loading: false,
    menu: {} as IMenu,
    menus: [] || null,
    addMenu(value) { },
    getMenus() { },
    updateMenu(values, menuId) {
        return null
    },
    deleteMenu(menuId) {
        return null
    }

})
export const useMenuContext = () => {
    let context = useContext(MenuContext);
    if (context === undefined) {
        throw new Error("app dispatch must be used within app global provider");
    }
    return context;
};

interface IProps {
    children: React.ReactNode;
}

export const MenuProvder: React.FC<IProps> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [menu, setMenu] = useState<IMenu>({} as IMenu)
    const [menus, setMenus] = useState<IMenu[]>([])

    const addMenu = async (values: any) => {
        setLoading(true)
        try {
            const response = await fetch("http://localhost:5000/api/menuItems", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });
            setLoading(false)

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to create menu: ${errorMessage}`);
            }
            const newData = await response.json();
            console.log(newData, "newData...")
            setMenus([...menus, newData]);
            // toast.success("Product Successfully Created");

            return newData;
        } catch (err) {
            console.error("Error creating Menu:", err);
            // toast.error(err as any)
        }
    };
    const updateMenu = async (values: IMenu, menuId: string) => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:5000/api/menuItems/${menuId}`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values),
            });
            setLoading(false)

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to update menu: ${errorMessage}`);
            }
            const updatedMenu = await response.json();
            setMenus((prevMenus) =>
                prevMenus.map((menu) => (menu?._id === menuId ? updatedMenu : menu)));
        } catch (err) {
            console.error("Error creating Menu:", err);
            // toast.error(err as any)
        }
    };

    const deleteMenu = async (menuId: any) => {
        setLoading(true)
        try {
            const response = await fetch(`http://localhost:5000/api/menuItems/${menuId}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            });
            setLoading(false)

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Failed to update menu: ${errorMessage}`);
            }
            // toast.success("Product Successfully Delete");
        } catch (err) {
            console.error("Error creating Menu:", err);
            // toast.error(err as any)
        }
    };

    // @Get all the menu
    const getMenus = async () => {
        setLoading(true)
        try {
            const response = await fetch("http://localhost:5000/api/menuItems", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMenus(data);
            setLoading(false)

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <MenuContext.Provider
            value={{
                loading,
                menu,
                menus,
                addMenu,
                getMenus,
                updateMenu,
                deleteMenu
            }}>
            {children}

        </MenuContext.Provider>
    )
}