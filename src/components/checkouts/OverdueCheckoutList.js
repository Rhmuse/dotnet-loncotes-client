import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getOverdueCheckouts } from '../../data/checkoutsData';

export const OverdueCheckoutList = () => {
    const [overdueCheckouts, setOverdueCheckouts] = useState([]);

    useEffect(() => {
        getOverdueCheckouts().then(setOverdueCheckouts);
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
                    </tr>
                </thead>
                <tbody>
                    {overdueCheckouts.map((co) => {
                        return (
                            <tr key={`overdue-checkout-${co.id}`}>
                                <th scope='row' >{co.id}</th>
                                <td>{co.materialId}</td>
                                <td>{co.material.materialName}</td>
                                <td>{co.material.materialType.name}</td>
                                <td>{co.patronId}</td>
                                <td>{co.patron.fullName}</td>
                                <td>{co.checkoutDate?.split("T")[0]}</td>
                                <td>{co.returnDate?.split("T")[0] || "Checked Out"}</td>
                                <td>{co.lateFee || "N/A"}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}