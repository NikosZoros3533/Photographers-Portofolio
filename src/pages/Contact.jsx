import "../css/Contact.css";
import Swal from "sweetalert2";

export default function Contact() {
  //replace "YOUR_ACCESS_KEY" with the token got from this page https://web3forms.com/platforms/react-contact-form#step__1
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "01ccb5e9-d330-4fde-b02c-52183721e8a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message was sent succesfully.",
        width: 600,
        icon: "success",
        padding: "4em",
        color: "#ffe5ff",
        background: "#000000",
        backdrop: `
        rgba(255,229,255,0.2)
      `,
      });
      
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <div className="input-box">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            className="field"
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="input-box">
          <label>Email address:</label>
          <input
            type="email"
            name="email"
            className="field"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea
            type="text"
            name="message"
            className="field mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
