import Image from "next/image";
import sit_logo from "@/public/images/sit_logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container back-to-top-container">
        <div className="pull-right">
          <a href="#" className="back-to-top">
            <i className="fa fa-arrow-up"></i> Back to top
          </a>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="footer-item pull-left">
          <p className="text-muted">ⓒ MCML Group. All rights reserved.</p>
        </div>
        <div className="footer-item pull-right">
          <a href="http://sit.yonsei.ac.kr" target="_blank">
            <Image
              className="footer-logo"
              src={sit_logo}
              alt="School of Integrated Technology"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
