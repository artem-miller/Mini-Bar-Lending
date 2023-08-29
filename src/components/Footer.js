import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__header">
          <a href="#">ТЕЛЕГРАМ</a>
          <a href="#">ВКОНТАКТЕ</a>
          <a href="#">ТИКТОК</a>
        </div>
        <div className="footer__info">
          <h2>ПРИНИМАЕМ К ОПЛАТЕ</h2>
          <h2>ЕЖЕДНЕВНО С 8 ДО 23</h2>
        </div>
        <div className="footer__payment">
          <img src="./images/payment.webp" alt=""></img>
        </div>
      </footer>
    );
  }
}

export default Footer;