'use server'
import { fetchApi } from '@/utils/api';

export const getCarts = async () =>
    await fetchApi({
        url: '/carts',
        method: 'GET',
    });

export const getDetailCart = async (id: string | number) =>
    await fetchApi({
        url: `/carts/${id}`,
        method: 'GET',
    });