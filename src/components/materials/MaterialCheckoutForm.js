import { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { checkoutMaterial } from "../../data/checkoutsData";
import { getAvailableMaterials } from '../../data/materialsData';

export const MaterialCheckoutForm = ({ setIsModalOpen, availableMaterial, setAvailableMaterials }) => {
    const [patronId, setPatronId] = useState('');

    const submit = () => {
        const newCheckout = {
            materialId: availableMaterial.id,
            patronId,
        };

        checkoutMaterial(newCheckout).then(() => {
            getAvailableMaterials().then(setAvailableMaterials);
            setIsModalOpen(false);
        })
    }

    return (
        <div className='container'>
            <div className='container' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <h4>Check Out</h4>
                <Button onClick={() => {
                    setIsModalOpen(false);
                }}>X</Button>
            </div>
            <h5>{availableMaterial.materialName}</h5>
            <Form>
                <FormGroup>
                    <Label htmlFor='patronId'>Enter the Patron's Id</Label>
                    <Input
                        type='text'
                        placeholder='Patron Id'
                        name='patronId'
                        value={patronId}
                        onChange={(e) => {
                            setPatronId(e.target.value);
                        }}
                    />
                </FormGroup>
                <Button onClick={submit}>
                    Confirm
                </Button>
            </Form>
        </div>

    )
}