import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xr5fqxl', 'template_3qv5cp4', form.current, 'user_AKP0GGreZxlMvSYXzLyGQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Email</label>
            <input type="email" name="user_email" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactUs;