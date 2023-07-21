'use client'
import clsx from 'clsx';
import useSidebar from '@/hooks/use-sidebar';
import { Button, Icon, ImageWithFallback } from '../../commons';

export default function HeaderNavbar() {
    const { toggleSidebar } = useSidebar();

    return (
        <header className={clsx('header')}>
            <div className='flex flex-row justify-start items-center w-full h-full hide-mobile'>
               {/* <h1 className='text-2xl font-medium tracking-wider text-white'>Assessment Test - Dealls</h1> */}
            </div>
            <div className='flex flex-row justify-between items-center w-full h-full hide-website'>
                <ImageWithFallback alt='logo-short' src={'/images/logo-short.svg'} className='w-auto h-auto' />
                <div className='flex flex-row justify-start items-center'>
                    <Button
                        rounded
                        variant='light'
                        className='w-12 h-12'
                        size='none'
                        onClick={toggleSidebar}
                        iconLeft={
                            <Icon name='menu' className='text-2xl fill-white' />
                        }
                    />
                </div>
            </div>
        </header>
    );
}
