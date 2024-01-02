import React from 'react'

interface IProps {
    name: string,
    total: string
    icon: any
}

export const SummaryCard: React.FC<IProps> = ({ name, total, icon }) => {
    return (
        <div className="border-2 rounded-md w-[14rem] h-[5rem]">
            <div className='flex justify-between  p-3'>
                <div>
                    <h4 className="text-md ">{total}</h4>
                    <h4 className="text-md ">{name}</h4>
                </div>
                <div>
                    {icon}
                </div>
            </div>
        </div>
    )
}
