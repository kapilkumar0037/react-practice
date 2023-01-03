

import Header from '../header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

export default function Parent() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
