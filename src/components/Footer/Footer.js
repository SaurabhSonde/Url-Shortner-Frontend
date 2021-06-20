import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div
          style={{
            marginBottom: "1em",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "0.8em",
          }}
        >
          Code with ❤️ by
          <a
            href="https://www.instagram.com/iamsaurabh.dev"
            style={{
              marginLeft: "0.3em",
              textDecoration: "none",
              fontStyle: "italic",
            }}
          >
            Saurabh
          </a>
        </div>
        &copy; 2021 Short.ly
      </footer>
    </div>
  );
};

export default Footer;
