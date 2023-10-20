"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import stl from "./navbar.module.css";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className={stl.nav}>
            <div>Logo</div>
            <ul>
                <li>
                    <Link className={`link ${pathname === "/" ? "active" : ""}`} href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={`link ${pathname === "/" ? "active" : ""}`} href='/blog'>
                        Blog
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
