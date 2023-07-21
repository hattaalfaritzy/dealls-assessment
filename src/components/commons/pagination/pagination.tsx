import clsx from 'clsx';
import Button from '../button/button';

export default function Pagination({
    className,
    currentPage = 1,
    total = 100,
    itemsPerPage = 10,
    onClickNext = () => {},
    setCurrentPage = () => {},
    onClickPrev = () => {},
    onClickPage = () => {},
}: Props) {
    const totalPages = Math.ceil(total / itemsPerPage);
    return (
        <div className={clsx('flex flex-wrap justify-center space-x-2', className)}>
            <Button
                onClick={() => {
                    setCurrentPage(currentPage - 1);
                    onClickPrev();
                }}
                label='Previous'
                disabled={currentPage === 1}
                outline={currentPage === 1 ? false : true}
            />

            {currentPage > 3 && (
                <div className='flex flex-row justify-center items-center space-x-2'>
                    <Button
                        onClick={() => {
                            setCurrentPage(1);
                            onClickPage(10, 0);
                        }}
                        label='1'
                        disabled={currentPage === 1}
                        outline
                        className='w-10'
                    />
                    {currentPage > 4 && <Button label='...' outline className='w-10' />}
                </div>
            )}

            {Array.from({ length: Math.min(totalPages, 4) }, (_, index) => index + currentPage - 2).map(
                (page) =>
                    page > 0 &&
                    page <= totalPages && (
                        <Button
                            key={page}
                            onClick={() => {
                                setCurrentPage(page);
                                onClickPage(10, (page - 1) * 10);
                            }}
                            label={page.toString()}
                            disabled={currentPage === 1}
                            className='w-10'
                            outline={page === currentPage ? false : true}
                        />
                    )
            )}

            {currentPage < totalPages - 1 && (
                <div className='flex flex-row justify-center items-center space-x-2'>
                    {currentPage < totalPages - 2 && <Button label='...' disabled outline className='w-10' />}
                    <Button
                        onClick={() => {
                            setCurrentPage(totalPages);
                            onClickPage(10, (totalPages - 1) * 10);
                        }}
                        label={totalPages.toString()}
                        disabled={currentPage === totalPages}
                        outline
                        className='w-10'
                    />
                </div>
            )}

            <Button
                onClick={() => {
                    setCurrentPage(currentPage + 1);
                    onClickNext();
                }}
                label='Next'
                disabled={currentPage === totalPages}
                outline={currentPage === totalPages ? false : true}
            />
        </div>
    );
}

type Props = {
    className?: string;
    data?: any;
    total?: number;
    currentPage?: number;
    setCurrentPage?: (currentPage: number) => void;
    itemsPerPage?: number;
    onClickNext?: () => void;
    onClickPrev?: () => void;
    onClickPage?: (limit: number, skip: number) => void;
};
