import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
  cvFileUrl?: string;
  detailedPortfolioUrl?: string;
}

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @param cvFileUrl - The URL of the CV file.
 * @param detailedPortfolioUrl - The URL of the detailed portfolio.
 * @param
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
  cvFileUrl,
  detailedPortfolioUrl,
}): JSX.Element => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : profile.bio}
          </div>
        </div>
        {detailedPortfolioUrl && (
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href={detailedPortfolioUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs opacity-50"
              rel="noreferrer"
            >
              View Detailed Portfolio
            </a>
          </div>
        )}
        {(resumeFileUrl || cvFileUrl) && (
          <div className="flex justify-center space-x-4 mt-6">
            {loading ? (
              <div className="mt-6">
                {skeleton({ widthCls: 'w-40', heightCls: 'h-8' })}
              </div>
            ) : (
              <>
                {resumeFileUrl && (
                  <a
                    href={resumeFileUrl}
                    target="_blank"
                    className="btn btn-outline btn-sm text-xs opacity-50"
                    download
                    rel="noreferrer"
                  >
                    View Resume
                  </a>
                )}
                {cvFileUrl && (
                  <a
                    href={cvFileUrl}
                    target="_blank"
                    className="btn btn-outline btn-sm text-xs opacity-50"
                    download
                    rel="noreferrer"
                  >
                    View CV
                  </a>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarCard;
