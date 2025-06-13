import React, { useState } from "react";
import "./chatApp.css";
import emailjs from "emailjs-com";
import ChatIcon from "../Images/iconMessage.png";

const ChatApp = () => {
const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState({
name: "",
email: "",
recipientEmail: "jay.k.992000@gmail.com", // Default recipient email
message: "",
});
const [successMessage, setSuccessMessage] = useState(""); // State for success message

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail, // Recipient's email
name: formData.name,
email: formData.email,
message: formData.message,
to_name: formData.name,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"Email sent successfully!",
response.status,
response.text
);
setFormData({
name: "",
email: "",
recipientEmail: "jay.k.992000@gmail.com",
message: "",
}); // Clear the form
setSuccessMessage("Message has been sent successfully!"); // Set success message
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again."); // Error message
}
);
};

return (
<div>
<img
className="message_icon"
src={ChatIcon}
alt="Contact Icon"
onClick={() => setShowForm(!showForm)}
/>

{showForm && (
<form onSubmit={sendEmail} className="chatApp_form">
<div></div>
<div>
<h1>
Hi there! <br /> Contact Me
</h1>
<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}
required
/>{" "}
<br />
<input
type="email"
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}
required
/>{" "}
<br />
<input
type="email"
name="recipientEmail"
placeholder="Recipient's Email"
value={formData.recipientEmail}
onChange={handleChange}
required
className="hideInput_Contact"
/>{" "}
<br />
<textarea
name="message"
placeholder="Your Message"
value={formData.message}
onChange={handleChange}
required
/>{" "}
<br />
<button type="submit">Send Message</button>
{successMessage && (
<p className="success_message">{successMessage}</p>
)}{" "}
{/* Success message */}
</div>
</form>
)}
</div>
);

};

export default ChatApp;
