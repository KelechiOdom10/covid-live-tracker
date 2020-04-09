import React from "react";
import ContactForm from "./Form";

function Contact() {
	return (
		<div className="contact">
			<ContactForm />
			<div className="contactimage">
				<img className="formimg" src="./assets/contact.png" alt="" />
			</div>
		</div>
	);
}

export default Contact;
