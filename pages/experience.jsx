import React from "react";
import Navbar from "../components/Navbar";

export default function experience() {
  return (
    <div>
      <Navbar>
        <p className="fw-bold fs-2 mx-auto">Project Experience</p>
        <div className="mx-auto">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="image/gmae1.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fw-bold">
                    BM and RW in The forest temple
                  </p>
                  <p className="card-text">
                    This is Scratch project from last year this game about
                    Blueman and Redwomen to gather energy to protect this
                    forest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="image/endlessrunner.jpg"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-title fw-bold">Endlessrunner</p>
                  <p className="card-text">
                    This is C++ project from last year this game about The Man
                    run to collect coin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
