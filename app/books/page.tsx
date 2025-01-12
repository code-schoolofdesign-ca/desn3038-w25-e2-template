"use client";

import React, { useEffect, useState } from "react";

export default function Page() {

    const [list, setList] = useState<any>([]);

    const fetchData = async () => {

        const hostname = "https://" + window.location.hostname.replace("3000", "3001");
        const target = hostname + "/books";
        const result = await fetch(target);
        const output = await result.json();
        setList(output.data);

    }

    useEffect(() => {
        fetchData();
    }, []);

    return <>
        <table className="table table-sm">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Published</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {list.map((lo, li) => {

                    return <tr key={"table_" + li}>
                        <td>{lo.id}</td>
                        <td>{lo.title}</td>
                        <td className="text-danger">
                            {/* WIP - NEEDS INNER JOIN */}
                            ???
                        </td>
                        <td>{lo.pub_date.substr(0, 10)}</td>
                        <td>{lo.genre}</td>
                    </tr>

                })}
            </tbody>

        </table>
    </>
}