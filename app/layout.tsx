"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const pathname = usePathname();

    const nav = [
        "authors",
        "books",
        "users",
        "rentals"
        // ADD MORE TABS HERE
    ];

    return (
        <html lang="en">
            <body>

                <div className="container my-5">

                    <h1>📚 GBC Library</h1>

                    <ul className="nav nav-pills mb-3">
                        {nav.map((o,i) => {
                            return <li className="nav-item" key={"nav_"+i}>
                                <Link className={"nav-link " + (pathname.indexOf(o) > -1 ? "active" : "")} aria-current="page" href={"/"+o}>{o.toUpperCase()}</Link>
                            </li>
                        })}
                    </ul>

                    {children}
                    
                </div>

            </body>
        </html>
    )
}