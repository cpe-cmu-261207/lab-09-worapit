import React from "react";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <div>
        <Navbar
          home="btn btn-outline-light"
          exp="btn btn-outline-light"
          contact="btn btn-outline-secondary"
          lap7="btn btn-outline-light"
        />
        <div
          style={{ backgroundColor: "antiquewhite", color: "darkslateblue" }}
        >
          <h4
            className="d-flex align-items-center flex-column rounded-3 ms-2 mt-3 p-1"
            style={{ fontFamily: "Abril Fatface" }}
          >
            CONTACT ME
          </h4>
        </div>

        <div className=" d-none d-sm-flex mt-3 d-flex  align-items-center mx-auto vstack ">
          <div className="d-flex gap-3 align-items-center border border-2 rounded-3 p-2">
            <img
              src="/profile.jpg"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded-circle ms-2"
            />

            <div
              className="card-text rounded-3 mt-3 p-2 d-flex align-items-md-start mx-auto  gap-3"
              style={{ color: "antiquewhite" }}
            >
              <div className="text-sm-start  lh-sm ">
                <p className="fw-bold">Name </p>
                <p className="fw-bold">Nickname </p>
                <p className="fw-bold">Adress </p>
                <p className="fw-bold">Facebook </p>
                <p className="fw-bold">Email </p>
                <p className="fw-bold">Phone </p>
                <p className="fw-bold">Freelance </p>
              </div>

              <div
                class="text-sm-start  lh-sm mt-1 "
                style={{
                  fontSize: "15px",
                  fontFamily: "Kanit",
                  color: "antiquewhite",
                }}
              >
                <p>Worapitcha Muangyot</p>
                <p>DREAM</p>
                <p>
                  2/8 หมู่5 บ้านใหม่ ตำบล หลวงเหนือ อำเภอ งาว จังหวัด ลำปาง
                  52110
                </p>
                <p></p>
                <a
                  href="https://www.facebook.com/worapitcha.muangyot/"
                  target="_block"
                  style={{ display: "block" }}
                  rel="noreferrer"
                >
                  https://www.facebook.com/[worapitcha.muangyot]
                </a>
                <p></p>
                <a
                  href=" https://outlook.office.com/mail/"
                  target="_block"
                  style={{ display: "block" }}
                  rel="noreferrer"
                >
                  Worapitcha_muangyot@cmu.ac.th
                </a>
                <p></p>
                <p>098-818-7969</p>
                <p>Available</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
