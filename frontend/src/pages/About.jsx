
import React from "react";

const About = () => {
  const containerStyle = {
    maxWidth: "950px",
    margin: "50px auto",
    padding: "50px",
    background: "#FFFFFF",
    borderRadius: "18px",
    border: "1px solid rgba(0,121,107,0.16)",
    boxShadow: "0 15px 45px rgba(0,121,107,0.14)",
    textAlign: "center",
  };

  const cardStyle = {
    background: "#E0F7FA",
    borderRadius: "14px",
    padding: "24px",
    border: "1px solid rgba(0,121,107,0.16)",
    flex: 1,
    minWidth: "220px",
  };

  return (
    <div style={containerStyle}>
      <img
        src="/ShoppyLogo.png"
        alt="Shoppy"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "contain",
          borderRadius: "20px",
          marginBottom: "25px",
          boxShadow: "0 8px 25px rgba(0,121,107,0.22)",
        }}
      />

      <h1
        style={{
          color: "#FFFFFF",
          fontSize: "3rem",
          marginBottom: "8px",
          fontWeight: "700",
        }}
      >
        About <span style={{ color: "#4CAF50" }}>Shoppy</span>
      </h1>

      <p
        style={{
          color: "#00796B",
          fontSize: "1.15rem",
          lineHeight: "1.9",
          maxWidth: "760px",
          margin: "25px auto",
        }}
      >
        <strong style={{ color: "#00796B" }}>Shoppy</strong> is a modern
        full-stack e-commerce platform built to deliver a seamless, secure,
        and intuitive online shopping experience. Designed with performance,
        simplicity, and user experience at its core, Shoppy enables customers
        to discover premium products, manage their shopping carts effortlessly,
        place secure orders, and track purchases through a clean and responsive
        interface.
      </p>

      <p
        style={{
          color: "#00796B",
          fontSize: "1.05rem",
          lineHeight: "1.9",
          maxWidth: "760px",
          margin: "0 auto 40px",
        }}
      >
        Powered by the MERN Stack, Shoppy integrates secure authentication,
        intelligent product management, responsive design, and scalable backend
        architecture to provide a reliable shopping ecosystem for both customers
        and administrators.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ color: "#4CAF50", marginBottom: "12px" }}>
            Secure Shopping
          </h3>

          <p style={{ color: "#00796B", lineHeight: "1.7" }}>
            Authentication, protected routes, secure checkout and reliable
            order management ensure a safe shopping experience.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: "#4CAF50", marginBottom: "12px" }}>
            Premium Experience
          </h3>

          <p style={{ color: "#00796B", lineHeight: "1.7" }}>
            Elegant UI, responsive layouts, smooth navigation and optimized
            performance across desktop, tablet and mobile devices.
          </p>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: "#4CAF50", marginBottom: "12px" }}>
            Built for Scale
          </h3>

          <p style={{ color: "#00796B", lineHeight: "1.7" }}>
            Developed using MongoDB, Express.js, React and Node.js with a
            scalable architecture that supports future enhancements.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "45px",
          paddingTop: "30px",
          borderTop: "1px solid rgba(0,121,107,0.16)",
        }}
      >
        <h2
          style={{
            color: "#00796B",
            marginBottom: "12px",
            fontSize: "1.6rem",
          }}
        >
          Our Vision
        </h2>

        <p
          style={{
            color: "#00796B",
            lineHeight: "1.9",
            maxWidth: "720px",
            margin: "0 auto",
          }}
        >
          To redefine online shopping by combining modern technology,
          exceptional user experience, and reliable services into one unified
          platform where quality, trust, and customer satisfaction always come
          first.
        </p>
      </div>
    </div>
  );
};

export default About;


