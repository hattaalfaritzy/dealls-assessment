'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, ListForm } from '@/components/commons';
import { useProductsStore } from '@/stores/products-store';

export default function DetailProduct() {
    const params = useParams();

    const { setDetailProduct, product_detail, loading } = useProductsStore();

    useEffect(() => {
        if (params) {
            setDetailProduct(params?.id.toString());
        }
    }, []);

    return (
        <div className='flex flex-col w-full space-y-12'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='text-3xl text-black font-medium'>Detail Product</h3>
            </div>
            <Card className='flex flex-col w-full space-y-2'>
                <ListForm title='Title' value={product_detail?.title} loading={loading} />
                <ListForm title='Brand' value={product_detail?.brand} loading={loading} />
                <ListForm title='Category' value={product_detail?.category} loading={loading} />
                <ListForm title='Description' value={product_detail?.description} loading={loading} />
                <ListForm title='Price' value={product_detail?.price} loading={loading} />
                <ListForm title='Stock' value={product_detail?.stock} loading={loading} />
            </Card>
        </div>
    );
}
