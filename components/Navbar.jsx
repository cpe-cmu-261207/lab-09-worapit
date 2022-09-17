import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div style={{ backgroundColor: "darkslateblue" }}>
        <div
          className="d-none d-sm-flex mx-auto align-items-center p-1"
          style={{ maxWidth: "1000px" }}
        >
          <span
            className="me-auto h2 mt-1"
            style={{ color: "antiquewhite", fontFamily: "Abril Fatface" }}
          >
            MY RESUME
          </span>
          <div className="hstack gap-5" style={{ fontFamily: "Prata" }}>
            <Link href="/profi">
              <a>
                <button type="button" className={props.home}>
                  HOME
                </button>
              </a>
            </Link>
            <Link href="/exp">
              <a>
                <button type="button" className={props.exp}>
                  EXPERIENCE
                </button>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <button type="button" className={props.contact}>
                  CONTACT
                </button>
              </a>
            </Link>
            <Link href="/lab_07">
              <a>
                <button type="button" className={props.lap7}>
                  LAP7
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
