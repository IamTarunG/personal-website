
import { useRouter } from 'next/router';
import Link from 'next/link';



function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (

        <Link href={href}>
            <a
                className={`${isActive ? "font-semibold text-white dark:text-gray-200 bg-gray-900 px-3 py-3 rounded-md" : "font-normal text-gray-600 dark:text-gray-400"} transition-all hover:bg-gray-700 px-3 py-3 rounded-md`}
            >
                <span>{text}</span>
            </a>
        </ Link>

    );
}



function Navbar() {
    return (
        <div className='flex justify-evenly bg-gray-800 py-4 items-center shadow-2xl sticky top-0 z-10'>

            <NavItem href={'/'} text="Home" />
            <NavItem href={'/about'} text="About" />
            <NavItem href={'/dashboard'} text="Dashboard" />
            <NavItem href={'/mywork'} text="My Work" />
        </div>
    )
}

export default Navbar