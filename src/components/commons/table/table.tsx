import clsx from 'clsx';
import TableHeader from './table-header/table-header';

export default function Table({
    classNameWrapper,
    className,
    columns,
    children,
}: Props) {
    return (
        <div
            className={clsx('relative mb-4 overflow-x-auto w-full', classNameWrapper)}
        >
            <table className={clsx('table', className)}>
                <thead className='sticky z-10 top-0 p-4 bg-primary text-white border-b border-[#F4F4F4] w-full'>
                    <tr>
                        {columns.map((item: any, index: number | string) => (
                            <TableHeader key={index} label={item} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children || (
                        <tr className='flex flex-row justify-center items-center w-full'>
                            <td className='flex justify-center items-center w-full px-4 py-4'>
                                <span className='text-sm text-dark-700 font-normal'>
                                    Data not found
                                </span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

interface Props {
    classNameWrapper?: string;
    className?: string;
    columns?: any;
    children?: React.ReactNode;
    loading?: boolean;
}
