import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  certificateLink,
  company,
  companyLink,
  description,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  certificateLink?: string;
  company?: React.ReactNode;
  companyLink?: string;
  description?: string;
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <a href={certificateLink} target='_blank' rel="noreferrer">
    <h3 className="font-bold text-base">{position}</h3>
    </a>
    <div className="font-semibold text-sm">
      <a href={companyLink} target="_blank" rel="noreferrer">
        {company}
      </a>
    </div>
    <div className="mb-4 my-0.5 text-xs">{time}</div>
    <div className="font-normal text-sm">
      {description?.split('\n').map((line, index) => <p key={index}>{line.trim()}</p>)}
    </div>
  </li>
);

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          time={skeleton({
            widthCls: 'w-5/5',
            heightCls: 'h-4',
          })}
          position={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          company={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
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
              <a href='https://kushshriv.github.io/portfolio/cs/experience/summary'>
                <span className="text-base-content opacity-70">Experience</span>
              </a>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
            {loading ? (
              renderSkeleton()
            ) : (
              <Fragment>
                {experiences.map((experience, index) => (
                  <ListItem
                    key={index}
                    time={`${experience.from} - ${experience.to}`}
                    position={experience.position}
                    company={experience.company}
                    companyLink={
                      experience.companyLink
                        ? experience.companyLink
                        : undefined
                    }
                    certificateLink={
                      experience.certificateLink
                        ? experience.certificateLink
                        : undefined
                    }
                    description={experience.description}
                  />
                ))}
              </Fragment>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
