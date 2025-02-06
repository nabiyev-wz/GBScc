import React, { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, phone, message } = formData;

        const telegramToken = "7636069952:AAFHHpUFBOrVIoo0A4ifXshGYmc4C44aMrM"; // Telegram bot token
        const chatId = "7636069952"; // Your chat ID

        // Create the message to send
        const text = `
      Ism: ${name}
      Telefon: ${phone}
      Xabar: ${message}
    `;

        const apiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

        // Send the message via Telegram Bot API
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });

            if (response.ok) {
                alert("Xabar yuborildi!");
            } else {
                alert("Xabar yuborishda xato yuz berdi.");
            }
        } catch (error) {
            console.error("Telegram API Error: ", error);
            alert("Xabar yuborishda xato yuz berdi.");
        }

        // Clear the form
        setFormData({
            name: "",
            phone: "",
            message: "",
        });
    };

    return (
        <div className="contact-container">
            <h1>Biz bilan bog'laning</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Ism</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Telefon raqam</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Xabar</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Yuborish</button>
            </form>

            <style jsx>{`
        .contact-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          color: #2e8b57;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          font-size: 1.1rem;
          color: #333;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px 20px;
          background-color: #2e8b57;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1.1rem;
          width: 100%;
          border-radius: 5px;
        }

        button:hover {
          background-color: #3cb371;
        }
      `}</style>
        </div>
    );
};

export default ContactPage;
