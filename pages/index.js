import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar>
        <div className="d-flex mx-auto">
          <img
            src="/image/6512.jpg"
            width={220}
            height={220}
            style={{ objectFit: "cover" }}
            className="border border- rounded-circle"
          />
          <div className="vstack ms-4 p-3" style={{ width: "600px" }}>
            <p className="fw-bold fs-2">Surabordin Ngaosai</p>
            <p className="fs-5">
              Hi, my name is Surabordin Ngaosai. I graduated from
              RangseeVittayaSchool.Now I'm Studying at Chiang Mai University in
              the Faculty of Engineering Computers. I like programming and
              learning
            </p>
          </div>
        </div>
        <div className="vstack mx-auto" style={{ width: "600px" }}>
          <hr className="my=0" />
          <p className="mx-auto fw-bold fs-2">My skil</p>
          {/* card  */}
          <div
            type="button"
            className="card mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <img
              src="/image/c++.jpg"
              className="card-img-top"
              width="250px"
              height="170px"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-title fw-bold fs-3">
                C++ programming language
              </p>
            </div>
          </div>
          <div
            type="button"
            className="card mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            <img
              src="/image/scratch.jpg"
              className="card-img-top"
              width="250px"
              height="170px"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-title fw-bold fs-3">Scratch</p>
            </div>
          </div>
          {/* Modal c++ */}
          <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">
                    C++ programming language
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  {" "}
                  <img
                    src="/c++code.png"
                    width="250px"
                    height="170px"
                    style={{ objectFit: "cover" }}
                  />{" "}
                  <br /> I used to study c++ in my first year of college. I
                  believe that c++ is a good foundation for writing further
                  developments in various computer languages.
                </div>
              </div>
            </div>
          </div>
          <hr className="my=0" />
          <p className="mx-auto fw-bold fs-2">My Hobby</p>
          <div className="card mb-3">
            <img
              src="/image/valorantLogo.jpg"
              className="card-img-top"
              width="250px"
              height="170px"
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-title fw-bold fs-3">Playing Valorant</p>
            </div>
          </div>
          {/* Modal scratch */}
          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel2"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel2">
                    Scratch
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <img
                    src="/image/scratchdrawn.jpg.png"
                    width="250px"
                    height="170px"
                    style={{ objectFit: "cover" }}
                  />{" "}
                  <br />
                  Scratch is a language I learned in my first year in college,
                  it taught me how to code for beginners to better understand
                  algorithms.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
