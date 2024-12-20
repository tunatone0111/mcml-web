export default function Contact() {
  return (
    <div className="container">
      <div>
        <div className="page-header">
          <h3>
            <i className="fa fa-plane"></i> Contact
          </h3>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12680.434933860555!2d126.67744589284399!3d37.387260760591325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x7914af9c04080e73!2z7Jew7IS464yA7ZWZ6rWQIOq1reygnOy6oO2NvOyKpA!5e0!3m2!1sko!2s!4v1439471967794"
              height="400"
              style={{ width: "100%", border: "0" }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-6">
            <dl>
              <dt>Professor's Office</dt>
              <dd>
                #305, Veritas C Hall
                <br />
                85 Songdogwahak-ro
                <br />
                Yeonsu-gu, Incheon, 21983, South Korea
                <br />
                &nbsp;
              </dd>
              <dt>Laboratory</dt>
              <dd>
                #326, Veritas C Hall
                <br />
                85 Songdogwahak-ro
                <br />
                Yeonsu-gu, Incheon, 21983, South Korea
                <br />
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
