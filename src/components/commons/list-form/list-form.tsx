import clsx from 'clsx';

export default function ListForm({ className, classNameValue, title, value, loading, important, renderValue }: Props) {
    return (
        <div className={clsx('flex flex-col justify-start items-start', loading && 'space-y-1', className)}>
            <span className='text-base text-[#687488]'>{title} {important && <span className='text-error'>*</span>}</span>
            {loading ? (
                <span className='rounded-full bg-light-700 h-4 w-2/3 animate-pulse' />
            ) : renderValue || <span className={clsx('text-base text-[#3C434E] font-bold', classNameValue)}>{value ? value : '-'}</span>}
        </div>
    );
}

interface Props {
    className?: string;
    classNameValue?: string;
    title?: string;
    value?: string | number;
    loading?: boolean;
    important?: boolean;
    renderValue?: React.ReactNode;
}
