"use client"

import react, { useState } from "react";
import AddMenu from "./components/addMenu";
import ModalComponent1 from "../_components/modals/centerModal";
import ButtonComponent from "../_components/button";
import MenuList from "./components/menuList/menu";
import { IMenu } from "./model";
import { useMenuContext } from "./context";
import { InputSearchComponent } from "../_components/input/searchInput";


const MenuDetial = () => {
    const { menu: singleMenu } = useMenuContext()
    console.log(singleMenu, "detail page")

    const [modal, setModal] = useState<{ show: boolean, data?: IMenu, type?: "Create Menu " | "Update Menu" }>({
        show: false,
        type: "Create Menu "
    })
    const [search, setSearch] = useState()

    const handleModal = () => {
        setModal({ show: true, type: "Create Menu " })
    }
    const handleUpdateModal = () => {
        setModal({ show: true, data: singleMenu, type: "Update Menu" });
    };
    return (
        <div className="mt-10">
            <div className="mx-4">

                <div className="my-4 flex gap-3">
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

                    <div className="flex gap-6">
                        <ButtonComponent size="large" type="default"
                            className="bg-green-400 text-white"
                            onClick={() => { handleModal() }}>
                            CreateMenu
                        </ButtonComponent>

                    </div>

                </div>

                <div>
                    <MenuList handleUpdateModal={() => handleUpdateModal()} />
                </div>
            </div>


            <ModalComponent1
                title={modal?.type as any}
                open={modal?.show}
                width={600}
                center={false}
                onDismiss={() => setModal({ show: false })}>
                <AddMenu singleMenu={modal?.data as any} />
            </ModalComponent1>
        </div>
    )
}

export default MenuDetial;