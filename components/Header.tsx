'use client';

import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import '@/styles/theme.css';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    let headerText = '';

    // Check the current path to set the header text
    if (pathname === "/") {
        headerText = "Pop Movies";
    } else if (pathname.startsWith("/movie/")) {
        headerText = "Movie details";
    }

    return (
        <header className='header'>
            <div className="left">
                {pathname !== "/" && (
                    <button onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeft} /></button>
                )}
                <h1>{headerText}</h1>
            </div>
            <div className="menu-button">
                <span><FontAwesomeIcon icon={faEllipsisV} /></span>
            </div>
        </header>
    )

}