import React from "react";
import { Link } from "gatsby";
import { PaginationStyle } from "../styles/PaginationStyle";

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationStyle>
      {hasPrevPage && <Link to={`/${base}/${prevPage}`}>&#8592; Prev</Link>}

      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          key={i}
          to={`/${base}/${i + 1}`}
          className={currentPage === 1 && i === 0 ? "current" : ""}
        >
          {i + 1}
        </Link>
      ))}

      {hasNextPage && <Link to={`/${base}/${nextPage}`}>Next &#8594;</Link>}
    </PaginationStyle>
  );
}
