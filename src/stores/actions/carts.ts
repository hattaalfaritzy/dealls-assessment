'use server'
import * as cartsApi from '@/api/carts';

export const getCarts = async () => {
    try {
        const res: CartsInterface.ApiResponse = await cartsApi.getCarts();
        return res;
    } catch (error) {
        throw error;
    }
};

export const getDetailCart = async (id: string | number) => {
    try {
        const res: CartsInterface.Carts = await cartsApi.getDetailCart(id);
        return res;
    } catch (error) {
		throw error;
    }
};