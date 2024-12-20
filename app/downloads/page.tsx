export default function Downloads() {
  return (
    <div className="container">
      <div>
        <div className="page-header">
          <h3>
            <i className="fa fa-download"></i> Downloads
          </h3>
        </div>

        <hr />

        <ul>
          <li>
            <a href="http://mmspg.epfl.ch/svd" target="_blank">
              <i className="fa fa-external-link-square"></i> Scalable video
              database (SVD)
            </a>
          </li>
          <li>
            <a
              href="http://www.eecs.qmul.ac.uk/mmv/datasets/deap/"
              target="_blank"
            >
              <i className="fa fa-external-link-square"></i> Database for
              emotion analysis using physiological signals (DEAP)
            </a>
          </li>
          <li>
            <a href="/downloads/cauchyn">
              Multi-dimensional Cauchy random number generator
            </a>
          </li>
          <li>
            <a href="ftp://1.233.219.115/Database/2012/" target="_blank">
              <i className="fa fa-external-link-square"></i> Database for video
              quality assessment of compression and packet loss artifacts
            </a>
          </li>
          <li>
            <a href="http://mmspg.epfl.ch/mimesis" target="_blank">
              <i className="fa fa-external-link-square"></i> Modeling immersive
              media experience by sensing impact on subjects (MIMESIS)
            </a>
          </li>
          <li>
            <a href="/downloads/yfcc100mvideos">
              YFCC100M video metadata database
            </a>
          </li>
          <li>
            <a href="/downloads/hdrtone">
              Physiological responses of tone-mapped HDR video database
            </a>
          </li>
          <li>
            <a
              href="https://github.com/manricheon/MCML-4K-UHD-video-quality-database"
              target="_blank"
            >
              <i className="fa fa-external-link-square"></i> 4K UHD video
              quality database
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
