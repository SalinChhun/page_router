import { http } from '@/utils/http';
import React from 'react'

export const productService = {
    getAllProduct
}

const ServiceId = {
    PRODUCTS: '/product/getAllProducts',
}

function getAllProduct() {
    const API = ServiceId.PRODUCTS;
    return http.get(API).then(res => res?.data?.data?.products).catch(err => err);

}
