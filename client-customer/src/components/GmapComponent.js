import React, { Component } from "react";

class Gmap extends Component {
  render() {
    return (
      <div className="align-center">
        <h1 className="text-center">MY LOCATION</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62700.605984190464!2d106.62998285820312!3d10.827539199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmcgLSBDxqEgc-G7nyBjaMOtbmg!5e0!3m2!1svi!2s!4v1721412380656!5m2!1svi!2s"
          width="800"
          height="600"
          style={{ border: 0 }} // Chuyển đổi thành đối tượng
          allowFullScreen="" // Sử dụng camelCase
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // Sử dụng camelCase
          title="Google Map of My Location" // Thêm thuộc tính title
        ></iframe>
      </div>
    );
  }
}

export default Gmap;
