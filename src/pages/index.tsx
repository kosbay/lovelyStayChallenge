import { useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'

import { Table, ResultView, SelectInput } from 'src/components'
import { fetchGithubUsers } from 'src/helpers/requests'
import { OFFSET } from 'src/constants'

export interface IndexPageProps {}

interface TableRowProps {
  avatar_url: string
  login: string
  type: string
}[]

const tableConfig = [
  { rowHead: 'Avatar', rowKey: 'avatar_url', isImage: true },
  { rowHead: 'Login', rowKey: 'login' },
  { rowHead: 'Type', rowKey: 'type' },
]

const selectOptions = [
  { value: 'repositories', label: 'Most repositories' },
  { value: 'followers', label: 'Most followers' },
  { value: 'joined', label: 'First joined' },
]

const IndexPage: React.FC<IndexPageProps> = () => {
  const [page, setPage] = useState(1)
  const [username, setUsername] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('repositories')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleFetchGithubUsers = async ({ selectedPage = 1 }: { selectedPage?: number }) => {
    setIsLoading(true)
    const { payload, isError, errorMessage } = await fetchGithubUsers({ page: selectedPage, username, sortBy })
    if(isError) {
      setErrorMessage(errorMessage)
    } else {
      setData(payload)
      setErrorMessage('')
    }
    setIsLoading(false)
  }

  const handleSearchClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPage(1)
    handleFetchGithubUsers({})
  }

  const handleChangePage = (selected: number) => {
    setPage(selected)
    handleFetchGithubUsers({ selectedPage: selected })
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value)
    handleFetchGithubUsers({})
  }

  const handleRowClick = (navigationValue: string) => {
    Router.push({
      pathname: `/users/${navigationValue}`,
    })  
  }

  const isNotFound = data?.total_count === 0
  const isInitialState = !data && !data?.errorMessage && !isLoading
  const isError = !!errorMessage
  const isDataLoaded = !!data

  return (
    <>
      <Head>
        <title>Github users Search | LovelyStay</title>
      </Head>
      <div className="indexContainer">
        <h1>Find your friend on Github</h1>
        <form onSubmit={handleSearchClick} className="filterBlock">
          <input
            className="elements"
            placeholder="Search users from Github"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <SelectInput
            customClassName="elements"
            options={selectOptions}
            value={sortBy}
            onChange={handleSelectChange}
          />
          <button
            className="elements"
            type="submit"
            disabled={!username}
          >
            Search
          </button>
        </form>
        <ResultView
          isError={isError}
          isNotFound={isNotFound}
          isInitialState={isInitialState}
          isLoading={isLoading}
          errorMessage={errorMessage}
        />
        {!isError && !isNotFound && isDataLoaded && (
          <Table<TableRowProps>
            tableConfig={tableConfig}
            rows={data?.items || []}
            pageCount={Math.ceil(data?.total_count ? data?.total_count / OFFSET : 1)}
            currentPage={page}
            count={data?.total_count || 0}
            pageDataCount={data?.items?.length}
            onChange={handleChangePage}
            offset={OFFSET}
            onRowClick={handleRowClick}
            navigationKey="login"
          />
        )}
      </div>
    </>
  )
}

export default IndexPage
