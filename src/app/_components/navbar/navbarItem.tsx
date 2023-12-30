import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";


interface IProps {
    link: string
    title?: string,
    icon?: React.ReactNode
    onClick?: () => void
    childrens?: IChildrens[]
    showChildren?: "none" | "show"
}

interface IChildrens {
    icon?: React.ReactNode
    title?: string,
    link: string


}
const NavbarItem = ({ link, icon, title, childrens, showChildren = "none" }: IProps) => {
    const [drop, setDrop] = useState(false)

    const handleDropDown = () => {
        setDrop(!drop)
        console.log("Yeap i dey work!")
    }
    return (
        <div>

            {
                showChildren === "show" ? (
                    <div className='flex justify-between m-0 items-center py-2 hover:bg-green-200 hover:text-green-600 rounded-md' onClick={() => handleDropDown()} >
                        <div className='flex gap-4 '>
                            <div >{icon}</div>
                            <p className='hidden font-semibold text-lg text-white sm:hidden md:flex lg:flex'>{title}</p>
                        </div>
                        <div className="hidden sm:hidden md:flex lg:flex">
                            {drop ? (<FaAngleDown />) : (< FaAngleRight />)}
                        </div>
                    </div>
                ) : (
                    <Link href={link} className='flex justify-between items-center py-2 hover:bg-green-200 hover:text-green-600 rounded-md'>
                        <div className='flex gap-4'>
                            <div>{icon}</div>
                            <p className='hidden font-semibold text-lg text-white sm:hidden md:flex lg:flex'>{title}</p>
                        </div>
                    </Link>

                )
            }




            <div className={drop ? "block   ml-10" : "hidden"}>
                {
                    childrens?.map((item, index) => (
                        <div key={index}>
                            <Link href={item?.link} className='flex gap-4 items-center rounded-md  hover:bg-green-200 hover:text-green-600 p-2  '>
                                <div>
                                    {item?.icon}
                                </div>
                                <p className='font-semibold text-lg text-white'>{item?.title}</p>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>

    )
}

export default NavbarItem
