import React from "react";
import { Form, Button } from "react-bootstrap";

function ContactForm() {
	return (
		<Form className="formss">
			<Form.Group>
				<Form.Label>Full Name</Form.Label>
				<Form.Control type="email" placeholder="Enter full name" />
			</Form.Group>
			<Form.Group controlId="formGroupEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
			<Form.Group>
				<Form.Label>Company</Form.Label>
				<Form.Control type="text" placeholder="Enter company" />
			</Form.Group>
			<Form.Group controlId="exampleForm.ControlTextarea1">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows="4" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}

export default ContactForm;
