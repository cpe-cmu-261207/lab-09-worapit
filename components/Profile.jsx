import React from "react";

export default function Profile() {
  return (
    <div className="mt-3 d-flex align-items-center mx-auto vstack">
      <img
        src="/profile.jpg"
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
        className="rounded-circle"
      />
      <div className="d-flex align-items-center mx-auto vstack">
        <span className="fw-bold mt-1" style={{ color: "antiquewhite" }}>
          WORAPITCHA MUANGYOT
        </span>
        <div
          style={{
            backgroundColor: "antiquewhite",
            color: "darkslateblue",
            fontFamily: "Kanit",
          }}
          className="d-flex align-items-center flex-column p-2 rounded-3 ms-2 mt-1"
        >
          <span>สวัสดีค่ะ ชื่อ : วรพิชชา เมืองยศ ชื่อเล่น : ดรีม</span>
          <span>จบการศึกษามัธยม : บุญวาทย์วิทยาลัยลำปาง</span>
          <span>กำลังศึกษาปริญญาตรี : มหาวิทยาลัยเชียงใหม่</span>
          <span>-วิศวกรรมศาสตร์ สาขา คอมพิวเตอร์-</span>
        </div>
      </div>
    </div>
  );
}
