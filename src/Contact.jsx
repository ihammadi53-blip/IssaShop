import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    
  });

 const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  بتتعامل مع البيانات
    console.log(formData);

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    // تفريغ الفورم
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
             {success && (
        <p style={{ color: "green", marginTop: "10px" }}>
          تم تسجيل المعلومات بنجاح!
        </p>
      )}
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        
      </div>
    </section>
  );
};

export default Contact;
