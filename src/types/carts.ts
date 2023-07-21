declare namespace CartsInterface {
    export interface Carts {
        id: string;
        products: ListProducts[];
        total: number;
        discountedTotal: number;
        userId: string;
        totalProducts: number;
        totalQuantity: number;
    }

    export interface ListProducts {
        id: string;
        title: string;
        price: number;
        quantity: number;
        total: number;
        discountPercentage: number;
        discountedPrice: number;
    }

    export interface ApiResponse {
        carts: Carts[];
        limit: number;
        skip: number;
        total: number;
    }
}
