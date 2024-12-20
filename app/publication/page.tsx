import publications from '../data/publications.json';
import { PublicationData, Publication, YearlyPublications } from '../types/publication';

function PublicationEntry({ publication }: { publication: Publication }) {
  return (
    <td>
      <b>{publication.title}</b>
      <br />
      {publication.authors.join(', ')}
      <br />
      {publication.venue}, {publication.details} <br />
      {publication.links.map((link, index) => (
        <>
          {index > 0 && '\u00A0\u00A0\u00A0\u00A0'}
          <a
            key={link.url}
            className="publication-link"
            href={link.url}
            target="blank"
          >
            <i className={`fa ${link.icon}`}></i> {link.type}
          </a>
        </>
      ))}
    </td>
  );
}

function YearSection({ year, data }: { year: string; data: YearlyPublications }) {
  return (
    <>
      <a className="bookmark-anchor" id={year}></a>
      <div className="page-header">
        <h3>{year}</h3>
      </div>
      <div className="row">
        {data.journal && (
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <h4>
                      <b>Journal</b>
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.journal.map((pub, index) => (
                  <tr key={index}>
                    <PublicationEntry publication={pub} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {data.conference && (
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <h4>
                      <b>Conference</b>
                    </h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.conference.map((pub, index) => (
                  <tr key={index}>
                    <PublicationEntry publication={pub} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <hr />
    </>
  );
}

export default function PublicationPage() {
  const years = Object.keys(publications).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="container">
      <div>
        <div className="page-header">
          <h3>
            <i className="fa fa-newspaper-o"></i> Publication
          </h3>
          <ol className="breadcrumb">
            {years.map(year => (
              <li key={year} role="presentation">
                <a href={`#${year}`}>{year}</a>
              </li>
            ))}
          </ol>
        </div>

        {years.map(year => (
          <YearSection
            key={year}
            year={year}
            data={(publications as PublicationData)[year]}
          />
        ))}
      </div>
    </div>
  );
}
