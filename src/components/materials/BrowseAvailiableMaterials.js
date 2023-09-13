import { useEffect, useState } from 'react';
import { getAvailableMaterials } from '../../data/materialsData';
import { Button, Modal, ModalBody, Table } from 'reactstrap';
import { MaterialCheckoutForm } from './MaterialCheckoutForm';

export const BrowseAvailableMaterials = () => {
    const [availableMaterials, setAvailableMaterials] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAvailableMaterial, setSelectedAvailableMaterial] = useState({});

    useEffect(() => {
        getAvailableMaterials().then(setAvailableMaterials);
    }, []);

    if (availableMaterials.length === 0) return null;

    return (
        <div className='container'>
            <h4>Browse</h4>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {availableMaterials.map((am) => (
                        <tr key={`available-materials-${am.id}`}>
                            <th scope='row'>{am.id}</th>
                            <td>{am.materialName}</td>
                            <td>{am.materialType.name}</td>
                            <td>{am.genre.name}</td>
                            <td><Button onClick={() => {
                                setIsModalOpen(true);
                                setSelectedAvailableMaterial(am);
                            }}>Check out</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal id="checkoutbook" isOpen={isModalOpen}>
                <ModalBody>
                    <MaterialCheckoutForm
                        availableMaterial={selectedAvailableMaterial}
                        setIsModalOpen={setIsModalOpen}
                        setAvailableMaterials={setAvailableMaterials}
                    />
                </ModalBody>
            </Modal>
        </div>
    )
};