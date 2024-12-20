import { Student } from "../types/member";
import MemberSection from "./MemberSection";

export default function Members() {
  const phdStudents: Student[] = [
    {
      name: "Jaehui Hwang",
      imageName: "jaehui_hwang.jpg",
      position: "Ph.D. Student",
      email: "jaehui.hwang@yonsei.ac.kr",
      website: "https://j-h-hwang.github.io/",
      interests: "Adversarial Attack, Robustness, Action Recognition",
    },
    {
      name: "Gihyun Kim",
      imageName: "gihyun_kim.jpeg",
      position: "Ph.D. Student",
      email: "kkh9314@yonsei.ac.kr",
      interests: "Deep Learning with Computer Vision, Adversarial Attack",
    },
    {
      name: "Juyeop Kim",
      imageName: "juyeop_kim.jpg",
      position: "Ph.D. Student",
      email: "juyeopkim@yonsei.ac.kr",
      interests: "Explainable AI",
    },
    {
      name: "Junha Park",
      imageName: "junha_park.jpg",
      position: "Ph.D. Student",
      email: "junha.park@yonsei.ac.kr",
      interests: "Deep Learning for Graph Data, Generative Models",
    },
    {
      name: "Seungeun Yu",
      imageName: "seungeun-yu.jpeg",
      position: "Ph.D. Student",
      email: "seungeun.yu@yonsei.ac.kr",
      interests: "Computer Vision",
    },
    {
      name: "Hyeonjin Lee",
      imageName: "hyeonjin_lee.jpg",
      position: "Ph.D. Student",
      email: "hyeonjin.lee@yonsei.ac.kr",
      interests: "Human-Like Machine Learning",
    },
    {
      name: "Donghee Shin",
      imageName: "donghee_shin.jpeg",
      position: "Ph.D. Student",
      email: "dh.shin@yonsei.ac.kr",
      interests: "Generative Model, Graph Neural Network",
    },
    {
      name: "Chae-Won Lee",
      imageName: "chae-won_lee.jpeg",
      position: "Ph.D. Student",
      email: "chae-won.lee@yonsei.ac.kr",
      interests: "Brain-Computer Interface, Model Privacy, Adversarial Attack",
    },
    {
      name: "Ian Ryu",
      imageName: "ian_ryu.jpeg",
      position: "Ph.D. Student",
      email: "ianryu@yonsei.ac.kr",
      interests: "Generative Models",
    },
  ];

  const msStudents: Student[] = [
    {
      name: "Junhyuk Park",
      imageName: "junhyuk_park.jpg",
      position: "M.S. Student",
      email: "junhyuk.park@yonsei.ac.kr",
      interests: "Deep Learning and its Application",
    },
    {
      name: "Jin-Woo Park",
      imageName: "jin_woo_park.jpg",
      position: "M.S. Student",
      email: "jin-woo.park@yonsei.ac.kr",
      interests: "Deep Learning and its Application",
    },
    {
      name: "Hyungkeun Park",
      imageName: "hyungkeun_park.jpeg",
      position: "M.S. Student",
      email: "hyungkeun.park@yonsei.ac.kr",
      interests: "Knowledge Distillation",
    },
    {
      name: "Jiyoon Kim",
      imageName: "jiyoon_kim.jpeg",
      position: "M.S. Student",
      email: "jiyoon.kim@yonsei.ac.kr",
      interests: "Generative Models",
    },
    {
      name: "Jiyun Kong",
      imageName: "jiyun_kong.jpeg",
      position: "M.S. Student",
      email: "jiyun.kong@yonsei.ac.kr",
      interests: "Computer Vision",
    },
  ];

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

      <MemberSection id="phd" title="Ph.D. Students" students={phdStudents} />
      <MemberSection id="ms" title="M.S. Students" students={msStudents} />

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
