import React from "react";
import Navbar from "../components/Navbar";

export default function exp() {
  return (
    <div style={{ backgroundColor: "indianred" }}>
      <Navbar
        home="btn btn-outline-light"
        exp="btn btn-outline-secondary"
        contact="btn btn-outline-light"
        lap7="btn btn-outline-light"
      />
      <h3
        className="d-flex align-items-center flex-column rounded-3  ms-2 mt-3"
        style={{ color: "antiquewhite", fontFamily: "Abril Fatface" }}
      >
        Project Experience
      </h3>

      <div className="mt-3 d-flex align-items-center mx-auto vstack">
        <img
          src="/tobe.jpg"
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
        <div className="d-flex align-items-center mx-auto vstack">
          <div
            style={{ backgroundColor: "antiquewhite", color: "darkslateblue" }}
            className="d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-3 "
          >
            <span className="fw-bold " style={{ color: "lightcoral" }}>
              Project : To Be Number One
            </span>
            <span style={{ fontFamily: "Kanit" }}>
              เข้าร่วมการแข่งขัน TO BE NUMBER ONE :
            </span>
            <span className="display: inline" style={{ fontFamily: "Kanit" }}>
              THE DANCERCISE ประเภททีม รอบจังหวัดลำปาง
              ได้รับรางวัลรองชนะเลิศอันดับ1 (ที่2){" "}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "lightcoral" }}
        className="d-flex align-items-center flex-column p-1 rounded-3  mt-3 "
      ></div>

      <div className="mt-3 d-flex align-items-center mx-auto vstack">
        <img
          src="/stk.jpg"
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
        <div className="d-flex align-items-center mx-auto vstack">
          <div
            style={{ backgroundColor: "antiquewhite", color: "darkslateblue" }}
            className="d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-3 "
          >
            <span className="fw-bold " style={{ color: "lightcoral" }}>
              Project : Sticker
            </span>
            <span style={{ fontFamily: "Kanit" }}>
              งานทดลองผลิตสติกเกอร์ เนื้อ PVC โดยใช้ Procreate{" "}
            </span>
            <span className="display: inline" style={{ fontFamily: "Kanit" }}>
              ในการออกแบบ แล้วส่งผลิตทาง ร้านไดคัท จะได้สติกเกอร์ออกมาดังรูป
            </span>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "lightcoral" }}
        className="d-flex align-items-center flex-column p-1 rounded-3  mt-3 "
      ></div>

      <div className="mt-3 d-flex align-items-center mx-auto vstack">
        <img
          src="/movie.jpg"
          width={150}
          height={150}
          style={{ objectFit: "cover" }}
          className="rounded-circle"
        />
        <div className="d-flex align-items-center mx-auto vstack">
          <div
            style={{ backgroundColor: "antiquewhite", color: "darkslateblue" }}
            className="d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-3 "
          >
            <span className="fw-bold " style={{ color: "lightcoral" }}>
              Project : Code C++
            </span>
            <span style={{ fontFamily: "Kanit" }}>
              โปรเจกต์ C++ เป็นระบบจัดการโรงหนัง เช่น
            </span>
            <span className="display: inline" style={{ fontFamily: "Kanit" }}>
              จัดเวลาฉายภาพยนตร์ เลือกที่นั่ง ระบบคิดเงิน เป็นต้น
              โปรเจกต์นี้มีสมาชิก 4 คน
            </span>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "lightcoral" }}
        className="d-flex align-items-center flex-column p-1 rounded-3  mt-3 "
      ></div>
    </div>
  );
}
