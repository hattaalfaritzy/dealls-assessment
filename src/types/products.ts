declare namespace ProductsInterface {
    export interface Products {
        id: string;
        brand: string;
        category: string;
        description: string;
        discountPercentage: number;
        images: string[];
        price: number;
        rating: number;
        stock: number;
        thumbnail: string;
        title: string;
    }

    export interface ApiResponse {
        limit: number;
        products: Products[];
        skip: number;
        total: number;
    }
}
