import React from 'react';
import { SanitizedEducation } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  degree,
  degreeLink,
  institution,
  institutionLink,
  grade,
  achievements,
}: {
  time: React.ReactNode;
  degree?: React.ReactNode;
  degreeLink?: string;
  institution?: React.ReactNode;
  institutionLink?: string;
  grade?: React.ReactNode;
  achievements?: string[];
}) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <a href={degreeLink}>
    <h3 className="font-bold text-base">{degree}</h3>
    </a>
    <a href={institutionLink}>
    <div className="font-semibold text-sm">{institution}</div>
    </a>
    <div className="text-xs mb-2">{time}</div>
    <div className="text-opacity-60 test-sm">{grade}</div>
    {achievements && (
      <div className="text-xs text-opacity-60">
        {achievements.map((achievement, index) => (
          <p key={index}>{achievement}</p>
        ))}
      </div>
    )}
  </li>
);

const EducationCard = ({
  loading,
  educations,
}: {
  loading: boolean;
  educations: SanitizedEducation[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          degree={skeleton({
            widthCls: 'w-6/12',
            heightCls: 'h-4',
            className: 'my-1.5',
          })}
          institution={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
          time={skeleton({
            widthCls: 'w-5/12',
            heightCls: 'h-4',
          })}
          grade={skeleton({ widthCls: 'w-6/12', heightCls: 'h-3' })}
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
              <a href='https://kushshriv.github.io/portfolio/cs/education/summary'>
                <span className="text-base-content opacity-70">Education</span>
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
                {educations.map((item, index) => (
                  <ListItem
                    key={index}
                    degree={item.degree}
                    institution={item.institution}
                    time={`${item.from} - ${item.to}`}
                    grade={item.grade}
                    degreeLink={
                      item.degreeLink ? item.degreeLink : undefined
                    }
                    institutionLink={
                      item.institutionLink ? item.institutionLink : undefined
                    }
                    achievements={item.achievements ? item.achievements : []}
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

export default EducationCard;
