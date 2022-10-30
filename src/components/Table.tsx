import cl from 'classnames'

import { Pagination } from '.'
import { PaginationProps } from './Pagination'

export interface TableProps<T> extends PaginationProps {
  rows: T[]
  tableConfig: {
    rowHead: string
    rowKey: string
    isImage?: boolean
  }[]
  onRowClick?: (navigationValue: string) => void
  navigationKey?: string
}

const Table = <T extends {}>({
  tableConfig,
  rows,
  onRowClick,
  navigationKey,
  ...paginationProps
}: TableProps<T>) => (
  <div>
    <table className="plainTable">
      <thead>
        <tr>
          {tableConfig?.map(({ rowHead }) => (
            <th key={rowHead}>{rowHead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          rows.map((row, key) => (
            <tr
              key={key}
              onClick={() => onRowClick && navigationKey && onRowClick(row[navigationKey])}
              className={cl(onRowClick && "clickable")}
            >
              {tableConfig.map(({ rowKey, isImage }, key) => {
                if(isImage) {
                  return <td key={key}><img src={row[rowKey]} /></td>
                }
                return (
                <td key={key}>{row[rowKey]}</td>
              )})}
            </tr>
          ))
        }
      </tbody>
    </table>
    <Pagination {...paginationProps} />
  </div>
)

export default Table
