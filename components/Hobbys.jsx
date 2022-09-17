import React from "react";

export default function Hobbys() {
  return (
    <div>
      <div
        className="mt-4"
        style={{
          backgroundColor: "antiquewhite",
          color: "darkslateblue",
          fontFamily: "Abril Fatface",
        }}
      >
        <h4 className="d-flex align-items-center flex-column rounded-3 ms-2 mt-3">
          MY HOBBY / MY FREE TIME
        </h4>
      </div>

      <div>
        <div className="d-none d-sm-flex d-flex align-items-md-start mx-auto gap-5 ms-5 mt-4 me-5">
          <div className="card ms-5" style={{ width: "18rem" }}>
            <img
              src="/dance.jpg"
              className="card-img-top"
              alt="Card imag cap"
            />

            <div className="card-body d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-1">
              <h5
                className="class-title"
                style={{ color: "indianred", fontFamily: "Prata" }}
              >
                DANCING
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "15px",
                  fontFamily: "Kanit",
                  color: "darkslateblue",
                }}
              >
                การเต้นส่วนใหญ่คือการเต้นโคฟเวอร์ ศิลปินเกาหลี และ เพลงสากลที่
                นักเต้นท่านอื่นได้ออกแบบท่าเต้นไว้
              </p>
            </div>
          </div>

          <div className="card ms-5 me-5" style={{ width: "18rem" }}>
            <img src="/art.jpg" className="card-img-top" alt="Card imag cap" />

            <div className="card-body d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-1">
              <h5
                className="class-title"
                style={{ color: "indianred", fontFamily: "Prata" }}
              >
                DRAWING
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "15px",
                  fontFamily: "Kanit",
                  color: "darkslateblue",
                }}
              >
                งานวาดรูป การวาดส่วนใหญ่เป็นการวาดรูปคน และสัตว์
                เป็นในรูปแบบของการ์ตูน มีการวาดทิวทัศน์บ้างในบางครั้ง
              </p>
            </div>
          </div>

          <div class="card me-5" style={{ width: "18rem" }}>
            <img src="/book.jpg" class="card-img-top" alt="Card imag cap" />

            <div className="card-body d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-1">
              <h5
                className="class-title"
                style={{ color: "indianred", fontFamily: "Prata" }}
              >
                READING
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "15px",
                  fontFamily: "Kanit",
                  color: "darkslateblue",
                }}
              >
                อ่านหนังสือทั่วไป โดยส่วนใหญ่จะอ่านหนังสือแนวจิตวิทยา
                และนิยายรักโรแมนติก และ นิยายแฟนซี
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
