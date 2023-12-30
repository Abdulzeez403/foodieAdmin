import React from "react";
import NavbarItem from "./_components/navbar/navbarItem";
import { RxDashboard } from "react-icons/rx";
import { PiCookingPotBold } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

interface IProps {
    children?: React.ReactNode;
}
const AdminLayout: React.FC<IProps> = ({ children }) => {


    const MenuItems = [
        {
            icon: <CiDeliveryTruck color="white" size={25} />,
            title: "Add Menu",
            link: "/menu/addmenu"
        },
        {
            icon: <CiDeliveryTruck color="white" size={25} />,
            title: "MenuList",
            link: "/addmenu"

        }
    ]




    return (

        <div className="bg-green-400 w-[500px] p-5 h-screen">
            <header className="flex justify-center items-center m-0 ">
                <div className="block">
                    <div className="bg-white rounded-md px-10 py-2 mb-4">
                        <h4 className="text-center text-green-400 text-[1.5rem]  font-bold">Foodie</h4>
                    </div>

                    {/* <div className="py-4 text-center">
                        <h4 className="font-bold text-[1.2rem">Abdulazeez Sodiq</h4>
                        <span className="text-slate-200">Good Morning!</span>
                    </div> */}
                </div>

            </header>

            <NavbarItem
                link="/"
                title="Dashboard"
                icon={<RxDashboard color="white" size={25} />}
                showChildren="none"
            />
            <NavbarItem
                link="/menus"
                title="Menu"
                icon={<PiCookingPotBold color="white" size={25} />}
                childrens={MenuItems}
                showChildren="none"
            />
            <NavbarItem
                link="/order"
                title="Orders"
                icon={<CiDeliveryTruck color="white" size={25} />}
                // childrens={daMenuItemsta}
                showChildren="none"

            />

            <NavbarItem
                link="/"
                title="Customer"
                icon={<FaUsers color="white" size={25} />}
                // childrens={MenuItems}
                showChildren="none"

            />

            <NavbarItem
                link="/"
                title="Analysis"
                icon={<BiSolidBarChartAlt2 color="white" size={25} />}
                showChildren="none"

            />

            <NavbarItem
                link="/"
                title="Setting"
                icon={<BiSolidBarChartAlt2 color="white" size={25} />}
                showChildren="none"

            />

            {children}


        </div>


    );
};

export default AdminLayout;