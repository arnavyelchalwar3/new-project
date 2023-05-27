import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <p>Women</p>
          <p>Women</p> 
          <p>Women</p>
          <p>Women</p>
          <p>Women</p>
          
        </div>
        <div className="item">
          <h1>Links</h1>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Stores</p>
          <p>Compare</p>
          <p>Cookies</p>
        </div>
        <div className="item">
          <h1>About</h1>
          <p className="p">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <p className="p">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2 className="logo">Lamastore</h2>
          <p className="copyright">
            © Copyright 2023. All Rights Reserved arnav
          </p>
        </div>
        <div className="right">
          <img src="/img/payment.png"  className="nav-img"alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
