'use server'
import { fetchApi } from '@/utils/api';

export const getProducts = async () =>
    await fetchApi({
        url: '/products',
        method: 'GET',
    });

export const getDetailProduct = async (id: string | number) =>
    await fetchApi({
        url: `/products/${id}`,
        method: 'GET',
    });

export const searchProducts = async (search: string | number) =>
    await fetchApi({
        url: `/products/search?q=${search}`,
        method: 'GET',
    });

export const getProductsLimit = async (limit: string | number, skip: string | number) =>
    await fetchApi({
        url: `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        method: 'GET',
    });