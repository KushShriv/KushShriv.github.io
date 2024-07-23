import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  year,
  name,
  givenBy,
  body,
  link,
}: {
  year?: React.ReactNode;
  name?: React.ReactNode;
  givenBy?: React.ReactNode;
  body?: React.ReactNode;
  link?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <div className="font-bold text-sm">
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
    <div className="text-sm font-semibold">{givenBy}</div>
    <div className="mb-2 text-xs">{year}</div>
    <h3 className="text-sm">{body}</h3>
  </li>
);

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          year={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          name={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          givenBy={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          body={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
        />,
      );
    }

    return array;
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <a href="https://kushshriv.github.io/portfolio/cs/certifications/highlight">
                <span className="text-base-content opacity-70">Certifications</span>
              </a>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <>
                {certifications.map((certification, index) => (
                  <ListItem
                    key={index}
                    year={certification.year}
                    name={certification.name}
                    givenBy={certification.givenBy}
                    body={certification.body}
                    link={certification.link}
                  />
                ))}
              </>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
