'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Logo({ className }: Props) {
    const pathname = usePathname();
    const isActive = pathname.startsWith('/');
    return (
        <Link href='/'>
            <div className={clsx('', className, isActive ? '' : '')}>
                <svg
                    xmlns='https://www.w3.org/2000/svg'
                    width='97'
                    height='46'
                    viewBox='0 0 97 46'
                    fill='none'
                >
                    <path
                        d='M0 33.5325V11.4661H7.90575C14.1925 11.4661 18.7982 15.5438 18.7982 22.5144C18.7982 29.485 14.1607 33.5325 7.87395 33.5325H0ZM7.71968 29.5486C11.3298 29.5486 14.3484 27.3078 14.3484 22.5144C14.3484 17.721 11.36 15.45 7.7499 15.45H4.2956V29.5486H7.71968Z'
                        fill='#6913D8'
                    ></path>
                    <path
                        d='M35.4702 29.1445C34.6926 31.7893 32.264 34 28.498 34C24.2963 34 20.5923 30.9814 20.5923 25.8143C20.5923 20.9287 24.2024 17.7543 28.1243 17.7543C32.8557 17.7543 35.6865 20.7728 35.6865 25.6902C35.6865 26.2819 35.6245 26.9037 35.6245 26.9657H24.67C24.7638 28.9887 26.4751 30.4518 28.5298 30.4518C30.459 30.4518 31.5182 29.4865 32.0159 28.1172L35.4702 29.1445ZM31.612 24.1333C31.55 22.6081 30.5544 21.1147 28.1879 21.1147C26.0409 21.1147 24.8577 22.7337 24.7638 24.1333H31.612Z'
                        fill='#6913D8'
                    ></path>
                    <path
                        d='M41.9622 24.7249L45.7282 24.1651C46.5998 24.041 46.8797 23.6053 46.8797 23.0757C46.8797 21.9863 46.04 21.0845 44.2969 21.0845C42.4918 21.0845 41.4962 22.2359 41.3722 23.575L37.7 22.7973C37.9497 20.4007 40.1587 17.7559 44.2667 17.7559C49.1221 17.7559 50.9272 20.4945 50.9272 23.575V31.1071C50.9272 31.9166 51.021 33.006 51.1132 33.534H47.3154C47.2216 33.13 47.1596 32.2887 47.1596 31.6971C46.3819 32.9105 44.9187 33.9697 42.6461 33.9697C39.3779 33.9697 37.3867 31.7607 37.3867 29.364C37.3867 26.6238 39.4097 25.0986 41.9622 24.7249ZM46.8797 27.3395V26.6556L43.4254 27.1852C42.3678 27.341 41.5265 27.9327 41.5265 29.1143C41.5265 30.0161 42.1801 30.8876 43.5176 30.8876C45.2607 30.8876 46.8797 30.0463 46.8797 27.3395Z'
                        fill='#6913D8'
                    ></path>
                    <path
                        d='M54.3018 33.5324V11H58.4415V33.5324H54.3018Z'
                        fill='#6913D8'
                    ></path>
                    <path
                        d='M61.9419 33.5324V11H66.0816V33.5324H61.9419Z'
                        fill='#6913D8'
                    ></path>
                    <path
                        d='M72.093 28.491C72.1869 29.7045 73.0886 30.8257 74.8937 30.8257C76.263 30.8257 76.9167 30.11 76.9167 29.3005C76.9167 28.6151 76.4491 28.0553 75.2674 27.8072L73.2445 27.3396C70.288 26.6859 68.9489 24.9127 68.9489 22.7641C68.9489 20.0255 71.3758 17.7528 74.6758 17.7528C79.0335 17.7528 80.495 20.5232 80.6827 22.1725L77.2284 22.9502C77.1043 22.0484 76.4507 20.8954 74.7076 20.8954C73.6182 20.8954 72.7467 21.549 72.7467 22.4206C72.7467 23.168 73.3065 23.634 74.1478 23.7899L76.3266 24.2574C79.3452 24.8793 80.8703 26.7162 80.8703 28.957C80.8703 31.4475 78.9412 33.9985 74.9255 33.9985C70.3198 33.9985 68.7326 31.0102 68.5449 29.2671L72.093 28.491Z'
                        fill='#6913D8'
                    ></path>
                    <path
                        d='M87.5913 26.81H84.5727L83.5771 11.4661H88.5884L87.5913 26.81ZM86.0661 28.833C87.4354 28.833 88.5566 29.9526 88.5566 31.3235C88.5566 32.6944 87.437 33.7822 86.0661 33.7822C84.727 33.7822 83.6392 32.6928 83.6392 31.3235C83.6392 29.9542 84.7286 28.833 86.0661 28.833Z'
                        fill='#F9E05B'
                    ></path>
                </svg>
            </div>
        </Link>
    );
}

interface Props {
    className?: string;
}