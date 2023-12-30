import { Avatar } from 'antd'
import React from 'react'


interface IProps {
    src: string
    size?: "small" | "default" | "large" | number
    shape?: "square" | "circle"
}

const AvatarComponents = ({ size = "default", shape = "circle", src }: IProps) => {
    return (
        <div>
            <Avatar shape={shape} size={size} src={src} alt="image" />
        </div>
    )
}

export default AvatarComponents
