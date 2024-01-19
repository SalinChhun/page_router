import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <>
            <header className="flex bg-blue-300 h-16 items-center justify-center">
                <ul className="flex space-x-8 font-semibold">
                    <li>
                        <Link href={"/products"}>Products</Link>
                    </li>
                    <li>
                        <Link href={"/brands"}>Brands</Link>
                    </li>
                </ul>
            </header>
        </>
    )
}

export default NavBar