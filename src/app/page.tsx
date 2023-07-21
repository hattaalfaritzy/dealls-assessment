'use client'
import { Card } from '@/components/commons';
import { useCartsStore } from '@/stores/carts-store';
import { useProductsStore } from '@/stores/products-store';
import { useEffect } from 'react';

export default function Home() {
    const { total: totalCarts, setDataCarts } = useCartsStore();
    const { total: totalProducts, getDataProducts } = useProductsStore();

    useEffect(() => {
        getDataProducts();
        setDataCarts();
    }, []);

    return (
        <div className='flex flex-col w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <Card className='flex flex-col justify-center items-center w-full p-12'>
                    <span className='text-lg lg:text-xl'>Data Products</span>
                    <span className='text-2xl lg:text-4xl'>{totalProducts}</span>
                </Card>
                <Card className='flex flex-col justify-center items-center w-full p-12'>
                    <span className='text-lg lg:text-xl'>Data Carts</span>
                    <span className='text-2xl lg:text-4xl'>{totalCarts}</span>
                </Card>
            </div>
        </div>
    );
}
