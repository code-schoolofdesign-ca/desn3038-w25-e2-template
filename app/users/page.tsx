"use client";

import React, { useEffect, useState } from "react";

export default function Page() {

    const [list, setList] = useState<any>([]);

    const fetchData = async () => {

        const hostname = "https://" + window.location.hostname.replace("3000", "3001");
        const target = hostname + "/users";
        const result = await fetch(target);
        const output = await result.json();
        setList(output.data);

    }

    useEffect(() => {
        fetchData();
    }, []);

    const removeUser = async (id) => {

        const response = confirm("Are you sure you wish to remove entry #" + id + "?");

        if (response === true) {

            // WIP - REQUIRES API WORK

            const payload = {
                id: id
            }

            const hostname = "https://" + window.location.hostname.replace("3000", "3001");
            const target = hostname + "/users";
            const result = await fetch(target, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

        }

    }

    const submitUser = async (form) => {

        // WIP - REQUIRES API WORK

        const data = new FormData(form);

        // WIP - PAYLOAD INCOMPLETE

        const payload = {
            id: data.get("id"),
        }

        const hostname = "https://" + window.location.hostname.replace("3000", "3001");
        const target = hostname + "/users";
        const result = await fetch(target, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

    }

    return <>
        <table className="table table-sm">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((lo, li) => {

                    return <tr key={"table_" + li}>
                        <td>{lo.id}</td>
                        <td>{lo.fname}</td>
                        <td>{lo.lname}</td>
                        <td>{lo.email}</td>
                        <td>
                            <button className="btn btn-danger btn-sm" onClick={(e) => {
                                removeUser(lo.id);
                            }}>
                                Remove
                            </button>
                        </td>
                    </tr>

                })}
            </tbody>

        </table>

        <h2>Add or modify entry</h2>

        <form onSubmit={(e) => {

            e.preventDefault();
            submitUser(e.target);

        }}>

            <input className="form-control mb-2" name="id" placeholder="Entry ID (leave blank for new)" />
            <input className="form-control mb-2" name="fname" placeholder="First name" />
            <input className="form-control mb-2" name="lname" placeholder="Last name" />
            <input className="form-control mb-2" name="email" placeholder="Email" />

            <button className="btn btn-primary">Submit</button>

        </form>



    </>
}