import Image from "next/image";
import professor_lee from "@/public/images/professor_lee.jpg";

export default function Professor() {
  return (
    <div className="container">
      <div>
        <div className="page-header">
          <h3>
            <i className="fa fa-magic"></i> Professor
          </h3>
        </div>

        <hr />

        <div className="media">
          <div className="media-left">
            <Image
              className="media-object professor-image"
              src={professor_lee}
              alt="Professor Lee"
            />
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              <b>Jong-Seok Lee</b>
            </h3>
            <p></p>
            <p></p>
            <p></p>
            <p>
              <b>Professor</b>
              <br />
              School of Integrated Technology, Yonsei University
              <br />
              Department of Artificial Intelligence, Yonsei University
            </p>
            <p>
              <a
                href="https://scholar.google.com/citations?user=YGwwt6cAAAAJ"
                target="_blank"
              >
                <i className="fa fa-external-link-square"></i> Google Scholar
              </a>
              <br />
            </p>
            <p>
              <b>Email</b>: jong-seok.lee at yonsei.ac.kr
              <br />
              <b>Phone</b>: +82-32-749-5846
              <br />
            </p>
            <p>&nbsp;</p>
            <h4 className="media-heading">
              <b>Professional Services</b>
            </h4>
            <p></p>
            <p></p>
            <p>
              <b>Senior Member</b>, IEEE
              <br />
              <b>Life Member</b>, IEIE, Korea
              <br />
              <b>Board Member</b>, Brain Engineering Society of Korea
              <br />
              <b>Member</b>, Multimedia Signal Processing Technical Committee
              (MMSP TC), IEEE Signal Processing Society (2021-2023, 2025-2027)
              <br />
              <b>Member</b>, Image, Video, and Multidimensional Signal
              Processing Technical Committee (IVMSP TC), IEEE Signal Processing
              Society (2025-2027)
              <br />
            </p>
            <p>
              <b>Associate Editor</b>, IEEE Communications Magazine (2016-2023)
              <br />
              <b>Area Editor</b>, Signal Processing: Image Communication (2013-)
              <br />
              <b>Associate Editor</b>, Frontiers in Signal Processing (2021-)
              <br />
              <b>Associate Editor</b>, IEEE Transactions on Multimedia (2024-)
              <br />
            </p>
            <p>
              <b>Co-chair</b>, Workshop on Hot Topics in 3D (Hot3D) 2015
              <br />
              <b>Chair</b>, Spring School on Social Media Retrieval (S3MR) 2010
              <br />
              <b>Co-organizer</b>, Summer School on Social Media Retrieval
              (S3MR) 2011
              <br />
            </p>
            <p>
              <b>TPC Chair</b>, Workshop on Network and Operating System Support
              for Digital Audio and Video (NOSSDAV) 2020
              <br />
              <b>Workshop Chair</b>, International Conference on Computing,
              Networking and Communications (ICNC) 2014-2016
              <br />
              <b>Publicity Chair</b>, International Conference on Human-Agent
              Interaction (HAI) 2015
              <br />
              <b>Local Chair</b>, Image, Video, and Multidimensional Signal
              Processing Workshop (IVMSP) 2013
              <br />
              <b>Local Chair</b>, International Conference on Neural Information
              Processing (ICONIP) 2013
              <br />
            </p>
            <p>
              <b>Area Chair</b>, ACM Multimedia Conference (MM) 2018-2024
              <br />
              <b>Area Chair</b>, IEEE International Conference on Image
              Processing (ICIP) 2019-2024
              <br />
              <b>Area Chair</b>, IEEE International Conference on Multimedia &
              Expo (ICME) 2021-2024
              <br />
              <b>Area Chair</b>, International Conference on Pattern Recognition
              (ICPR) 2012
              <br />
            </p>
            <p>
              <b>TPC member and reviewer</b> of many journals and conferences
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
