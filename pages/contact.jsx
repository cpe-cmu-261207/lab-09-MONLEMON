import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar>
        <p className="fw-bold fs-2 mx-auto">Contact me</p>
        <div className="d-flex mx-auto">
          <img
            src="/image/6512.jpg"
            width={220}
            height={220}
            style={{ objectFit: "cover" }}
            className="border border- rounded-circle"
          />
          <div className="vstack ms-4 p-3" style={{ width: "600px" }}>
            <div className="d-flex">
              <p className="fw-bold fs-4 pe-auto">Name</p>
              <p className="fs-4 ms-5">Surabordin Ngaosai</p>
            </div>
            <div className="d-flex">
              <p className="fw-bold fs-4 pe-auto">Nickname</p>
              <p className="fs-4 ms-3">Lemon</p>
            </div>
            <div className="d-flex">
              <p className="fw-bold fs-4 pe-4">Address</p>
              <p className="fs-4 ms-">
                House No.414 Village No.2 Village Ta Sub-area Pongtam Area
                Chaiprakarn Province Chiang Mai Postal Code 50320
              </p>
            </div>
            <div className="d-flex">
              <p className="fw-bold fs-4 pe-auto">Facebook</p>
              <div className="facebook">
                <a
                  className="fs-4 ms-3"
                  href="https://www.facebook.com/surabordin.ngaosai"
                  rel="noreferrer"
                >
                  https://www.facebook.com/surabordin.ngaosai
                </a>
              </div>
            </div>
            <div className="d-flex">
              <p className="fw-bold fs-4 pe-auto">Email</p>
              <div className="facebook">
                <a className="fs-4 ms-5" href="mailto:surabordin_n@cmu.ac.th">
                  surabordin_n@cmu.ac.th
                </a>
              </div>
            </div>
            <div className="d-flex">
              <p className="fw-bold fs-4 pe-auto">Phone</p>
              <p className="fs-4 ms-5">099-120-2632</p>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
