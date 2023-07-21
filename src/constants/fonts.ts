import { Manrope, Roboto_Mono } from 'next/font/google';

export const MANROPE = Manrope({
    weight: ['200', '300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

export const ROBOTO_MONO = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
});
