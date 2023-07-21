'use client';
import { useEffect, useState } from 'react';
import { Button, Pagination, Table } from '@/components/commons';
import { useProductsStore } from '@/stores/products-store';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { formSearch } from '@/utils/form-validation';
import { InputText } from '@/components/forms';
import _ from 'lodash';

export default function Products() {
    const router = useRouter();
    const { getDataProductsLimit, setDataProducts, setSearchProducts, products, total, limit, skip } = useProductsStore();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formSearch);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const onSubmit = async (value: any) => {
        try {
            setSearchProducts(value.search);
            var searchQuery = value.search.toString().toLowerCase();
            let listdata = ['title', 'brand', 'price', 'stock', 'category'].map((x, i) => {
                return products.filter((el: any) => {
                    if (el[x]) {
                        return el[x].toString().toLowerCase().indexOf(searchQuery) !== -1;
                    }
                });
            });
            var dataset = _.maxBy(listdata, function (o: any) {
                return o.length;
            });
            setDataProducts({ products: dataset });
        } catch (err) {
            console.log(err, 'cek err');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            (document.querySelector('#search-products') as HTMLInputElement).click();
        }
    };

    const columns: string[] = ['Product Name', 'Brand', 'Price', 'Stock', 'Category'];

    useEffect(() => {
        getDataProductsLimit(10, 0);
    }, []);


    const handleNextPage = async () => {
        await getDataProductsLimit(limit ? limit : 10, skip + 10);
    };

    const handlePrevPage = async () => { 
        await getDataProductsLimit(limit ? limit : 10, skip - 10);
    };

    return (
        <div className='flex flex-col w-full space-y-12'>
            <div className='flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center space-y-3 lg:space-y-0'>
                <h3 className='text-3xl text-black font-medium'>List Products</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-row justify-start items-center w-full max-w-sm'>
                    <InputText
                        id='search-products'
                        register={register('search')}
                        errMessage={errors.search?.message}
                        placeholder='Search'
                        onKeyDown={handleKeyDown}
                    />
                    <Button label='Search' type='submit' className='w-full hidden' />
                </form>
            </div>
            <div className='flex flex-col justify-start items-end w-full space-y-2'>
                <Table columns={columns} className='w-full'>
                    {products?.map((value: any, index: string | number) => (
                        <tr key={index} className='cursor-pointer' onClick={() => router.push(`/products/${value.id}`)}>
                            <td>{value.title}</td>
                            <td>{value.brand}</td>
                            <td>${value.price}</td>
                            <td>{value.stock}</td>
                            <td>{value.category}</td>
                        </tr>
                    ))}
                </Table>
                <Pagination
                    total={total ? total : 0}
                    itemsPerPage={products?.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    onClickNext={handleNextPage}
                    onClickPrev={handlePrevPage}
                    onClickPage={getDataProductsLimit}
                />
            </div>
        </div>
    );
}
