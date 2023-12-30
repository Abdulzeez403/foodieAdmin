import TableComponent from '@/app/menus/components/table'
import React, { useEffect } from 'react'
import { useMenuContext } from '../../context'


interface IProps {
    handleUpdateModal: () => void;
}


const MenuList = ({ handleUpdateModal }: IProps) => {
    const { menus, getMenus, loading } = useMenuContext()
    console.log(menus, "the menus!")

    useEffect(() => {
        getMenus()
    }, [])

    return (
        <div className="">
            <TableComponent
                data={menus as any}
                loading={loading}
                handleUpdateModal={() => handleUpdateModal()} />
        </div>
    )
}

export default MenuList
