import { create } from 'zustand';
import { getCarts, getDetailCart } from './actions/carts';

interface CartsState {
    carts: CartsInterface.Carts[];
    limit: number;
    skip: number;
    total: number;
    cart_detail: CartsInterface.Carts;
    loading: boolean;
}

interface CartsAction {
    setDataCarts: () => Promise<void>;
    setDetailCart: (id: string) => Promise<void>;
}

export const useCartsStore = create<CartsState & CartsAction>((set) => ({
    carts: [] as CartsInterface.Carts[],
    limit: 0,
    skip: 0,
    total: 0,
    loading: true,
    cart_detail: {} as CartsInterface.Carts,
    setDataCarts: async () => {
        const res = await getCarts();
        set(() => ({
            carts: res.carts,
            limit: res.limit,
            skip: res.skip,
            total: res.total,
        }));
    },
    setDetailCart: async (id) => {
        set(() => ({loading: true}));
        const res = await getDetailCart(id);
        set(() => ({
            cart_detail: res,
            loading: false,
        }));
    },
}));
