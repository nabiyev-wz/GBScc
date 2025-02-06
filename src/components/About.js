import React from "react";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Green Life</h1>
      <section className="company-info">
        <h2>About the Company</h2>
        <p>
          Green Life is an international company founded in 1998 in China. It
          specializes in producing and distributing high-quality, eco-friendly
          products. Green Life strives to provide consumers with quality and
          affordable products across various categories.
        </p>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <p>
          Green Life manufactures over 3500 products that are essential for daily
          living. Some of our popular products include:
        </p>
        <ul>
          <li>Sealuxe (Shveytsariya) - Elit cosmetic series for skin care</li>
          <li>iLife - Exclusive home appliances and cleaning tools</li>
          <li>Carich - Unique personal hygiene products</li>
          <li>Nilrich - Nutritional supplements for health support</li>
          <li>Kardli - Eco-friendly home products</li>
        </ul>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Green Life's main goal is to improve the quality of life of consumers by
          offering affordable, high-quality eco-friendly products that meet
          international standards. Our products are certified with various
          certifications, including GMP.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you are interested in purchasing our products or partnering with
          Green Life, feel free to contact us:
        </p>
        <p><strong>Address:</strong> Fayziobod 2-berk street, 2nd building</p>
        <p><strong>Phone:</strong> +998909332510</p>
        <p><strong>Telegram:</strong> @GREENLEAF_UZBEKISTAN</p>
      </section>

      <style jsx>{`
        .about-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 100px;
        }

        h1 {
          text-align: center;
          font-size: 2.5rem;
          color: #2e8b57;
          margin-bottom: 20px;
        }

        section {
          margin-bottom: 30px;
        }

        h2 {
          font-size: 2rem;
          color: #2e8b57;
        }

        p {
          font-size: 1rem;
          color: #555;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        .contact p {
          font-size: 1.1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
