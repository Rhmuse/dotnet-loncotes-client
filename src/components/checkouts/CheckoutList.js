import { useEffect, useState } from 'react';
import { getCheckouts } from '../../data/checkoutsData';
import { Table } from 'reactstrap';

export const CheckoutList = () => {
    const [checkouts, setCheckouts] = useState([]);

    useEffect(() => {
        getCheckouts().then(setCheckouts);
    }, [])

    return (
        <div className='container'>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Material Id</th>
                        <th>Material Name</th>
                        <th>Material Type</th>
                        <th>Patron Id</th>
                        <th>Patron Name</th>
                        <th>Checkout Date</th>
                        <th>Return Date</th>
                        <th>Late Fee</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map((co) => {
                        return (
                            <tr key={`checkout-${co.id}`}>
                                <td>{co.id}</td>
                                <td>{co.materialId}</td>
                                <td>{co.material.materialName}</td>
                                <td>{co.material.materialType.name}</td>
                                <td>{co.patronId}</td>
                                <td>{co.patron.fullName}</td>
                                <td>{co.checkoutDate?.split("T")[0]}</td>
                                <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                                <td>{"$" + co.lateFee || "N/A"}</td>
                                <td>{co.lateFee !== null ? co.paid ? "Paid" : "Outstanding" : "N/A"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};