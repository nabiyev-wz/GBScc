import React, { useState } from "react";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    language: "uzbek",
    notifications: true,
    darkMode: false,
    accountPrivacy: "private",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sozlamalar saqlangan!");
  };

  return (
    <div className="settings-container">
      <h1>Sozlamalar</h1>

      <form onSubmit={handleSubmit}>
        <section className="settings-section">
          <h2>Til Sozlamalari</h2>
          <label htmlFor="language">Tilni tanlang:</label>
          <select
            id="language"
            name="language"
            value={settings.language}
            onChange={handleChange}
          >
            <option value="uzbek">O'zbekcha</option>
            <option value="russian">Ruscha</option>
            <option value="english">Inglizcha</option>
          </select>
        </section>

        <section className="settings-section">
          <h2>Bildirishnomalar</h2>
          <label>
            <input
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            Bildirishnomalarni yoqish
          </label>
        </section>

        <section className="settings-section">
          <h2>Yorug'lik va qorong'u rejim</h2>
          <label>
            <input
              type="checkbox"
              name="darkMode"
              checked={settings.darkMode}
              onChange={handleChange}
            />
            Qorong'u rejimni yoqish
          </label>
        </section>

        <section className="settings-section">
          <h2>Hisob Maxfiyligi</h2>
          <label htmlFor="accountPrivacy">Maxfiylikni tanlang:</label>
          <select
            id="accountPrivacy"
            name="accountPrivacy"
            value={settings.accountPrivacy}
            onChange={handleChange}
          >
            <option value="private">Maxfiy</option>
            <option value="public">Ommaviy</option>
            <option value="friends">Faqat do'stlar</option>
          </select>
        </section>

        <button type="submit" className="save-button">Saqlash</button>
      </form>

      <style jsx>{`
        .settings-container {
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          margin-top: 100px;
        }

        h1 {
          text-align: center;
          color: #2e8b57;
          font-size: 2.5rem;
        }

        .settings-section {
          margin-bottom: 20px;
        }

        .settings-section h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        label {
          font-size: 1rem;
          color: #333;
        }

        select, input[type="checkbox"] {
          margin-top: 5px;
          padding: 5px;
        }

        select {
          width: 200px;
          font-size: 1rem;
        }

        .save-button {
          padding: 10px 20px;
          background-color: #2e8b57;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 20px;
          width: 100%;
        }

        .save-button:hover {
          background-color: #3cb371;
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;
