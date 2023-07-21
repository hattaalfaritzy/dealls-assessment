'use client';
import { useEffect, useState } from 'react';
import { Button, Table } from '@/components/commons';
import { useRouter } from 'next/navigation';
import { useCartsStore } from '@/stores/carts-store';

export default function Carts() {
    const router = useRouter();
    const { setDataCarts, carts } = useCartsStore();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    const columns: string[] = ['Id Cart', 'Total', 'Discounted', 'Total Products', 'Total Quantity'];

    const getData = async () => {
        await setDataCarts();
    }

    useEffect(() => {
        setLoading(true);
        getData();
        setLoading(false);
    }, []);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(carts.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedData = carts.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };
    

    return (
        <div className='flex flex-col w-full space-y-12'>
            <div className='flex flex-row justify-between items-center'>
                <h3 className='text-3xl text-black font-medium'>List Carts</h3>
            </div>
            <div className='flex flex-col w-full space-y-2'>
                <Table columns={columns}>
                    {paginatedData?.map((value: any, index: string | number) => (
                        <tr key={index} className='cursor-pointer' onClick={() => router.push(`/carts/${value.id}`)}>
                            <td>{value.id}</td>
                            <td>${value.total}</td>
                            <td>${value.discountedTotal}</td>
                            <td>{value.totalProducts}</td>
                            <td>{value.totalQuantity}</td>
                        </tr>
                    ))}
                </Table>
                {totalPages !== 1 && (
                    <div className='flex justify-end items-end space-x-2'>
                        <Button
                            onClick={handlePrevPage}
                            label='Previous'
                            disabled={currentPage === 1}
                            outline={currentPage === 1 ? false : true}
                        />
                        <Button
                            onClick={handleNextPage}
                            label='Next'
                            disabled={currentPage === totalPages}
                            outline={currentPage === totalPages ? false : true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
