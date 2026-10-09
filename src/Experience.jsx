// src/Experience.jsx
import { experiences } from "./experience.js"; // ./ means "same folder"
import "./experience.css";

const Tag = ({ label }) => (
  <span className="xp-tag" role="listitem">
    {label}
  </span>
);

const ExperienceItem = ({
  date,
  role,
  company,
  companyUrl,
  note,
  summary,
  bullets = [],
  tags = [],
}) => (
  <li className="xp-item">
    <div className="xp-date">{date}</div>

    <div className="xp-content">
      <h3 className="xp-title">
        {role}{" "}
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="xp-company"
            aria-label={`Company: ${company}`}
          >
            @ {company}
          </a>
        ) : (
          <span className="xp-company">@ {company}</span>
        )}
      </h3>

      {note && <p className="xp-note">{note}</p>}

      {summary && <p className="xp-summary">{summary}</p>}

      {bullets.length > 0 && (
        <ul className="xp-bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="xp-tags" role="list" aria-label="Technologies used">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}
    </div>
  </li>
);

const Experience = () => {
  return (
    <section className="xp-section" id="experience" aria-labelledby="xp-h">
      <div className="section-header">
        <p className="section-eyebrow">02 — Experience</p>
        <h2 id="xp-h">Experience</h2>
      </div>

      <ol className="xp-list">
        {experiences.map((e) => (
          <ExperienceItem key={`${e.date}-${e.role}`} {...e} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
