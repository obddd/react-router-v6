import React from 'react';
import { Outlet } from 'react-router-dom';

const ProductIndex = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default ProductIndex;