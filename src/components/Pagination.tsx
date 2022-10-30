import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

export interface PaginationProps {
  pageCount: number
  currentPage: number
  count: number
  pageDataCount: number
  offset: number
  onChange: (selected: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  pageDataCount,
  count,
  offset,
  onChange,
}) => {
  const [selected, setSelected] = useState(0)
  const [currentPageValue, setCurrentPageValue] = useState(currentPage - 1) // Lib's indexing starts from 0

  useEffect(() => {
    setCurrentPageValue(currentPage - 1)
  }, [currentPage])

  const handlePageClick = (data: { selected: number }) => {
    if(currentPageValue !== data.selected) {
      setSelected(data.selected)
      onChange(data.selected + 1)
    }
  }

  return (
    <div className="paginationContainer">
      <p>
        {(currentPage * offset) + 1 - offset} - {(currentPage * offset) + pageDataCount - offset} from {count}
      </p>
      <ReactPaginate
        previousLabel={<p className={selected === 0 ? "disabled" : ""}>Previous</p>}
        nextLabel={<p className={selected === pageCount - 1 ? "disabled" : ""}>Next</p>}
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        initialPage={currentPageValue}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={currentPageValue}
      />
    </div>
  )
}

export default Pagination
