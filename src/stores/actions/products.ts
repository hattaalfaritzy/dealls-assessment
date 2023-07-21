'use server'
import * as productsApi from '@/api/products';

export const getAllProducts = async () => {
    try {
        const res: ProductsInterface.ApiResponse = await productsApi.getProducts();
        return res;
    } catch (error) {
        throw error;
    }
};

export const getDetailProduct = async (id: string | number) => {
    try {
        const res: ProductsInterface.Products = await productsApi.getDetailProduct(id);
        return res;
    } catch (error) {
		throw error;
    }
};

export const searchProducts = async (search: string) => {
    try {
        const res: ProductsInterface.ApiResponse = await productsApi.searchProducts(search);
        return res;
    } catch (error) {
        throw error;
    }
};

export const getProductsLimit = async (limit: string | number, skip: string | number) => {
    try {
        const res: ProductsInterface.ApiResponse = await productsApi.getProductsLimit(limit, skip);
        return res;
    } catch (error) {
        throw error;
    }
};