import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-5 sm:mb-5 xl:mb-2">
      <div className="join">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <input
              key={page}
              className={`join-item btn btn-square hover:bg-[#C9C7C5] ${
                currentPage === page ? "bg-[#C9C7C5]" : "bg-white"
              }`}
              type="button"
              name="options"
              aria-label={page}
              value={page}
              onClick={() => onPageChange(page)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Pagination;
