import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { PaginationButton } from './PaginationButton';

export const Pagination = ({
  onPrevious,
  onNext,
  hasPrevious = true,
  hasNext = true,
}: {
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}) => {
  return (
    <div className="flex my-4">
      {hasPrevious ? (
        <PaginationButton onClick={onPrevious}>
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-purple-400"
            aria-hidden="true"
          />
          Previous
        </PaginationButton>
      ) : null}

      {hasNext ? (
        <PaginationButton onClick={onNext} className="ml-auto">
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-purple-400"
            aria-hidden="true"
          />
        </PaginationButton>
      ) : null}
    </div>
  );
};
