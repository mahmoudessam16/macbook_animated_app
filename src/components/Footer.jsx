const Footer = () => {
  return <footer>
    <div className="info">
      <p>More ways to shop: {" "}
        <span>Find an Apple Store</span>
        {" "} 
        or 
        {" "}
        <span>other retailer</span>
        {" "} 
        near you. Or call 000800 040 1966
      </p>
    </div>

    <hr />

      <div className="links">
        <p>Copyright &copy; 2025</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sales Policy</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
  </footer>;
};

export default Footer;
