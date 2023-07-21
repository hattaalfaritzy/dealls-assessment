import { create } from 'zustand';
import { getAllProducts, getDetailProduct, getProductsLimit, searchProducts } from './actions/products';

interface ProductsState {
    limit: number;
    products: ProductsInterface.Products[];
    skip: number;
    total: number;
    product_detail: ProductsInterface.Products;
    loading: boolean;
}

interface ProductsAction {
    setDataProducts: (value: any) => Promise<void>;
    getDataProducts: () => Promise<void>;
    getDataProductsLimit: (limit: string | number, skip: string | number) => Promise<void>;
    setSearchProducts: (value: string) => Promise<void>;
    setDetailProduct: (id: string) => Promise<void>;
}

export const useProductsStore = create<ProductsState & ProductsAction>((set) => ({
    limit: 0,
    products: [] as ProductsInterface.Products[],
    skip: 0,
    total: 0,
    loading: true,
    product_detail: {} as ProductsInterface.Products,
    setDataProducts: async (value) => {
        set(() => ({
            limit: value.limit,
            products: value.products,
            skip: value.skip,
            total: value.total,
        }));
    },
    getDataProducts: async () => {
        const res = await getAllProducts();
        set(() => ({
            limit: res.limit,
            products: res.products,
            skip: res.skip,
            total: res.total,
        }));
    },
    getDataProductsLimit: async (limit, skip) => {
        const res = await getProductsLimit(limit, skip);
        set(() => ({
            limit: res.limit,
            products: res.products,
            skip: res.skip,
            total: res.total,
        }));
    },
    setSearchProducts: async (value) => {
        const res = await searchProducts(value);
        set(() => ({
            products: res.products,
            total: res.total,
        }));
    },
    setDetailProduct: async (id) => {
        set(() => ({loading: true}));
        const res = await getDetailProduct(id);
        set(() => ({
            product_detail: res,
            loading: false,
        }));
    },
}));
