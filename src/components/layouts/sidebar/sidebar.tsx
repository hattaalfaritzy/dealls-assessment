'use client'
import clsx from 'clsx';
import Link from 'next/link'
import { MdClose } from 'react-icons/md';
import { NAV_MENU } from '@/constants/layout';
import { Icon, Logo } from '@/components/commons';
import { usePathname } from 'next/navigation'
import useSidebar from '@/hooks/use-sidebar';

export default function Sidebar() {
    const { toggleSidebar, closeSidebar } = useSidebar();
    const pathname = usePathname();
    return (
        <aside className='sider'>
            <div className='flex flex-col w-full py-8 space-y-16 rounded hide-mobile'>
                <div className='flex justify-center items-center w-full px-6'>
                    <Logo />
                </div>
                <div className='flex flex-col space-y-3 px-3 2xl:px-6'>
                    {NAV_MENU.map((item: any, index: string | number) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={index} href={item.href}>
                                <div
                                    className={clsx(
                                        'flex flex-row justify-start items-center space-x-3 py-2 px-3 cursor-pointer',
                                        isActive
                                            ? 'text-white bg-primary rounded-xl'
                                            : 'text-[#687488]'
                                    )}
                                >
                                    <Icon name={item.icon} className={clsx(isActive ? 'fill-white' : 'fill-[#A0A8B6]')} />
                                    <span className='text-sm 2xl:text-base'>
                                        {item.label} {isActive}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className='flex flex-col justify-start w-full h-screen overflow-y-auto py-8 space-y-8 hide-website'>
                <div className='flex justify-between items-center px-8'>
                    <button
                        onClick={closeSidebar}
                        type='button'
                        className='flex flex-row justify-start items-end space-x-1'
                    >
                        <Logo />
                    </button>
                    <MdClose
                        onClick={toggleSidebar}
                        className='text-black hover:text-primary on-hover text-2xl cursor-pointer'
                    />
                </div>
                <div className='flex flex-col space-y-3 px-6 py-8 border-opacity-10 border-y'>
                    {NAV_MENU.map((item: any, index: string | number) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={index} href={item.href}>
                                <div
                                    className={clsx(
                                        'flex flex-row justify-start items-center space-x-3 py-2 px-4 cursor-pointer',
                                        isActive
                                            ? 'text-white bg-primary rounded-xl'
                                            : 'text-[#687488] hover:text-primary'
                                    )}
                                    onClick={closeSidebar}
                                >
                                    <Icon name={item.icon} className={clsx(isActive ? 'fill-white' : 'fill-[#A0A8B6]')} />
                                    <span className='text-base'>
                                        {item.label} {isActive}
                                    </span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </aside>
    );
}
