import Image from "next/image";
import jaehui_hwang from "@/public/images/members/jaehui_hwang.jpg";
import gihyun_kim from "@/public/images/members/gihyun_kim.jpeg";
import juyeop_kim from "@/public/images/members/juyeop_kim.jpg";
import junha_park from "@/public/images/members/junha_park.jpg";
import seungeun_yu from "@/public/images/members/seungeun-yu.jpeg";
import hyeonjin_lee from "@/public/images/members/hyeonjin_lee.jpg";
import donghee_shin from "@/public/images/members/donghee_shin.jpeg";
import chae_won_lee from "@/public/images/members/chae-won_lee.jpeg";
import ian_ryu from "@/public/images/members/ian_ryu.jpeg";
import junhyuk_park from "@/public/images/members/junhyuk_park.jpg";
import jin_woo_park from "@/public/images/members/jin_woo_park.jpg";
import hyungkeun_park from "@/public/images/members/hyungkeun_park.jpeg";
import jiyoon_kim from "@/public/images/members/jiyoon_kim.jpeg";
import jiyun_kong from "@/public/images/members/jiyun_kong.jpeg";

export default function Members() {
  return (
    <div className="container">
      <div className="page-header">
        <h3>
          <i className="fa fa-users"></i> Members
        </h3>
        <ol className="breadcrumb">
          <li role="presentation">
            <a href="#phd">Ph.D. Students</a>
          </li>
          <li role="presentation">
            <a href="#ms">M.S. Students</a>
          </li>
          <li role="presentation">
            <a href="#interns">Research Interns</a>
          </li>
          <li role="presentation">
            <a href="#alumni">Alumni</a>
          </li>
        </ol>
      </div>

      <hr />

      <a className="bookmark-anchor" id="phd"></a>
      <div className="page-header">
        <h3>Ph.D. Students</h3>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={jaehui_hwang}
                alt="Jaehui Hwang"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Jaehui Hwang</b>
              </h4>
              <p>Adversarial Attack, Robustness, Action Recognition</p>
              <p>
                jaehui.hwang at yonsei.ac.kr
                <br />
                <a href="https://j-h-hwang.github.io/" target="_blank">
                  <i className="fa fa-external-link-square"></i> Website
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={gihyun_kim}
                alt="Gihyun Kim"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Gihyun Kim</b>
              </h4>
              <p></p>

              <p>Deep Learning with Computer Vision, Adversarial Attack</p>
              <p>kkh9314 at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={juyeop_kim}
                alt="Juyeop Kim"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Juyeop Kim</b>
              </h4>
              <p>Explainable AI</p>
              <p>juyeopkim at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={junha_park}
                alt="Junha Park"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Junha Park</b>
              </h4>
              <p>Deep Learning for Graph Data, Generative Models</p>
              <p>junha.park at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={seungeun_yu}
                alt="Seungeun Yu"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Seungeun Yu</b>
              </h4>
              <p>Computer Vision</p>
              <p>seungeun.yu at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={hyeonjin_lee}
                alt="Hyeonjin Lee"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Hyeonjin Lee</b>
              </h4>
              <p>Human-Like Machine Learning</p>
              <p>hyeonjin.lee at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={donghee_shin}
                alt="Donghee Shin"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Donghee Shin</b>
              </h4>
              <p>Generative Model, Graph Neural Network</p>
              <p>dh.shin at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={chae_won_lee}
                alt="Chae-Won Lee"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Chae-Won Lee</b>
              </h4>
              <p>Brain-Computer Interface, Model Privacy, Adversarial Attack</p>
              <p>chae-won.lee at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={ian_ryu}
                alt="Ian Ryu"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Ian Ryu</b>
              </h4>
              <p>Generative Models</p>
              <p>ianryu at yonsei.ac.kr</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <a className="bookmark-anchor" id="ms"></a>
      <div className="page-header">
        <h3>M.S. Students</h3>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={junhyuk_park}
                alt="Junhyuk Park"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Junhyuk Park</b>
              </h4>
              <p></p>
              <p>
                junhyuk.park at yonsei.ac.kr
                <br />
                <a href="http://parkjunhyuk.com" target="_blank">
                  <i className="fa fa-external-link-square"></i> Website
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={jin_woo_park}
                alt="Jin-Woo Park"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Jin-Woo Park</b>
              </h4>
              <p>Deep Learning and its Application</p>
              <p>jin-woo.park at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={hyungkeun_park}
                alt="Hyungkeun Park"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Hyungkeun Park</b>
              </h4>
              <p>Knowledge Distillation</p>
              <p>hyungkeun.park at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={jiyoon_kim}
                alt="Jiyoon Kim"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Jiyoon Kim</b>
              </h4>
              <p>Generative Models</p>
              <p>ji-yoon.kim at yonsei.ac.kr</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="media member-item">
            <div className="media-left">
              <Image
                className="media-object member-image"
                src={jiyun_kong}
                alt="Jiyun Kong"
              />
            </div>
            <div className="media-body">
              <h4 className="media-heading">
                <b>Jiyun Kong</b>
              </h4>
              <p>Computer Vision</p>
              <p>jiyun.kong at yonsei.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="clearfix visible-md-block visible-lg-block"></div>
      </div>

      <hr />

      <a className="bookmark-anchor" id="alumni"></a>
      <div className="page-header">
        <h3>Alumni</h3>
      </div>

      <ul>
        <li>Hojung Lee (Ph.D.)</li>
        <li>Jin Lee (M.S.)</li>
        <li>Hyeongnam Jang (Ph.D.)</li>
        <li>Junghyuk Lee (Ph.D.)</li>
        <li>Seohyun Moon (M.S.)</li>
        <li>Geun-Woo Jeon (M.S.)</li>
        <li>Junho Oh (M.S.)</li>
        <li>
          Jun-Hyuk Kim (Ph.D.){" "}
          <a href="http://junhyukk.github.io" target="_blank">
            <i className="fa fa-external-link-square"></i> Website
          </a>{" "}
        </li>
        <li>Soobeom Jang (Ph.D.)</li>
        <li>Kyulim Kim (M.S.)</li>
        <li>
          Jun-Ho Choi (Ph.D.){" "}
          <a href="http://idearibosome.github.io" target="_blank">
            <i className="fa fa-external-link-square"></i> Website
          </a>{" "}
        </li>
        <li>Min-Su Choi (M.S.)</li>
        <li>Seong-Eun Moon (Ph.D.)</li>
        <li>
          Manri Cheon (Ph.D.){" "}
          <a href="http://manricheon.github.io" target="_blank">
            <i className="fa fa-external-link-square"></i> Website
          </a>{" "}
        </li>
        <li>Jooyeon Lee (M.S.)</li>
        <li>Won-Hee Kim (Postdoc)</li>
        <li>Soojin Kim (Ph.D.)</li>
        <li>Youngjae Kwon (M.S.)</li>
      </ul>
    </div>
  );
}
