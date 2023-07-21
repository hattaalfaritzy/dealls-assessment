'use client';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Card, ListForm, Table } from '@/components/commons';
import { useCartsStore } from '@/stores/carts-store';

export default function DetailCart() {
    const params = useParams();

    const { setDetailCart, cart_detail, loading } = useCartsStore();
    const columns: string[] = ['Title', 'Total', 'Discounted Percentage', 'Discounted Price', 'Price'];

    useEffect(() => {
        if (params) {
            setDetailCart(params?.id.toString());
        }
    }, []);

    return (
        <div className='flex flex-col w-full space-y-6'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='text-3xl text-black font-medium'>Detail Cart</h3>
            </div>
            <div className='flex flex-col w-full space-y-12'>
                <Card className='grid grid-cols-2 gap-6'>
                    <ListForm title='User' value={cart_detail?.userId} loading={loading} />
                    <ListForm title='# of Items' value={cart_detail?.totalProducts} loading={loading} />
                    <ListForm title='Total Products' value={cart_detail?.totalProducts} loading={loading} />
                    <ListForm title='Total Amount' value={cart_detail?.total} loading={loading} />
                </Card>
                <Table columns={columns}>
                    {cart_detail?.products?.map((value: CartsInterface.ListProducts, index: string | number) => (
                        <tr key={index} className='cursor-pointer'>
                            <td>{value.title}</td>
                            <td>{value.total}</td>
                            <td>${value.discountPercentage}</td>
                            <td>${value.discountedPrice}</td>
                            <td>${value.price}</td>
                        </tr>
                    ))}
                </Table>
            </div>
        </div>
    );
}
