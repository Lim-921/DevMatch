import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/EmailLogo.png';
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [showSuccessNotification, setShowSuccessNotification] = React.useState(false);
    const [showErrorNotification, setShowErrorNotification] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [successMessage, setSuccessMessage] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "395bf6db-2506-4792-8061-45560eb4cf3b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            if (data.success) {
                setSuccessMessage("Form Submitted Successfully");
                event.target.reset();
                setShowSuccessNotification(true);
                setTimeout(() => setShowSuccessNotification(false), 3000);
            } else {
                setErrorMessage("An error occurred while submitting the form. Please try again.");
                setShowErrorNotification(true);
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please check your connection and try again.");
            setShowErrorNotification(true);
        }
    };

    const closeNotification = () => {
        setShowSuccessNotification(false);
        setShowErrorNotification(false);
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={msg_icon} alt="" style={{ width: '50px', height: '50px' }}/></h3>
                <p>Feel free to reach out to us with any questions, feedback, or inquiries. 
                    We're here to help and look forward to hearing from you. Your message is important to us, 
                    and we'll get back to you as soon as possible.</p>
                <ul>
                    <li><img src={email} alt="" style={{ width: '30px', height: '30px' }}/>fundify123@outlook.com</li>
                    <li><img src={phone} alt="" style={{ width: '30px', height: '30px' }}/>+60362816390</li>
                    <li><img src={location} alt="" style={{ width: '30px', height: '30px' }}/>123 Jalan Merdeka, Kuala Lumpur, 50450, Wilayah Persekutuan Kuala Lumpur, Malaysia</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter Your Name' required/>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Enter Your Email' required/>
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required/>
                    <label>Write Your Message Here</label>
                    <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className='btn2'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
            {showSuccessNotification && (
                <div className="notification success">
                    {successMessage}
                    <button onClick={closeNotification} className="close-btn">X</button>
                </div>
            )}
            {showErrorNotification && (
                <div className="notification error">
                    {errorMessage}
                    <button onClick={closeNotification} className="close-btn">X</button>
                </div>
            )}
        </div>
    );
}

export default Contact;
