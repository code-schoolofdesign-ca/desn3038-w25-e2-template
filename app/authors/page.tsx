"use client";

import React, { useEffect, useState } from "react";

export default function Page() {

    const [list, setList] = useState<any>([]);

    const fetchData = async () => {

        const hostname = "https://" + window.location.hostname.replace("3000", "3001");
        const target = hostname + "/authors";
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
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {list.map((lo, li) => {

                    return <tr key={"table_" + li}>
                        <td>{lo.id}</td>
                        <td>{lo.fname}</td>
                        <td>{lo.lname}</td>
                    </tr>

                })}
            </tbody>

        </table>
    </>
}