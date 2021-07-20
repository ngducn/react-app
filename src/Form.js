import './App.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import DatePicker from "react-datepicker";

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

const FormCompo = ({ dataForm, setValue }) => {
    const handleValue = (event) => {
        setValue({ ...dataForm, [event.target.id]: event.target.value })
    }

    const [startDate, setStartDate] = useState(new Date());

    return (
        <section>
            <h1>Form</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" onChange={handleValue} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="age" placeholder="Age" onChange={handleValue} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBirthday">
                    <Form.Label>Birthday</Form.Label>
                    <span>{<br />}</span>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={handleValue} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="1234567890" onChange={handleValue} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Essay</Form.Label>
                    <Form.Control type="essay" as="textarea" rows={3} onChange={handleValue} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </section>
    )
};

export default FormCompo;