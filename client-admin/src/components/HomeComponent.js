import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="main-content-background">
        <div>
          <img src="/img1.jpg" alt="beautiful scenery" />
        </div>
        <div className="align-center">
          <h2
            className="text-center"
            style={{ color: "#fbea33", fontSize: "5.0rem" }}
          >
            ADMIN HOME PAGE
          </h2>
          <img
            src={`${process.env.PUBLIC_URL}/Logo1.png`}
            className="logo"
            alt="Logo"
            style={{
              width: "1000px",
            }} /* Điều chỉnh kích thước logo trực tiếp */
          />
        </div>
      </div>
    );
  }
}
export default Home;
