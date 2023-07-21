import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Footer from './footer/footer';

export default function DefaultLayout({ children }: Props) {
    return (
        <div id='layout-default'>
            <div className='container-layout'>
                <Sidebar />
                <div className='flex flex-col justify-start w-full h-full'>
                    <Header />
                    <main className='main'>
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}

interface Props {
    children: React.ReactNode,
}
