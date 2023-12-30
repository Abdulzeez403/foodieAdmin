// HeartIcon.js

import React from 'react';
import SVGIcon from './svg';

interface IProps {
    color: string,
}

const EditIcon = ({ color }: IProps) => {
    return (
        <SVGIcon width="24" height="24" viewBox="0 0 24 24" color={color} stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">
            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" stroke-width="2"
                d="M45.17,15.426L21.936,41.787c0,0,4.628,2.745,5.777,6.191c5.234-6.383,25.851-29.872,25.851-29.872	c4.117-4.404-5.745-14.362-11.362-8.426c-5.617,6.128-26.011,29.745-26.011,29.745l-3.415,15.83L20.149,52	c0,0-1.197-3.878-7.372-5.17"></path>
        </SVGIcon>
    );
};

export default EditIcon;