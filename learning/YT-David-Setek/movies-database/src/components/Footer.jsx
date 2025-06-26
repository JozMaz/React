import "./H&F.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Created by
        <span style={{ fontFamily: "cursive", fontSize: "16px" }}> Josh</span>.
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
