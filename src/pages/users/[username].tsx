import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { UserCard, Table, ContentLoader } from 'src/components'
import { useRepos } from 'src/hooks/useRepos'
import { useUser } from 'src/hooks/useUser'
import { OFFSET } from 'src/constants'

const tableConfig = [
  { rowHead: 'Name', rowKey: 'name' },
  { rowHead: 'Description', rowKey: 'description' },
]

interface TableRowProps {
  name: string
  description: string
}[]

const User = () => {
  const [page, setPage] = useState(1)
  const router = useRouter()
  const { username } = router.query

  const { data: userData } = useUser({ username: username as string, enabled: !!username })
  const { data, isLoading, isSuccess } = useRepos({ page, username: username as string, offset: OFFSET, enabled: !!username })

  const handleChangePage = (selected: number) => {
    setPage(selected)
  }

  const userReposTotal = userData?.public_repos || 0

  return (
    <>
      <Head>
        <title>Github users Search | {username}</title>
      </Head>
      <div className="profile">
        <div className="headRow">
          <button onClick={router.back} className="backButton">{'<'}</button>
          <h1>Find your friend on Github</h1>
        </div>
        <UserCard
          className="userInfo"
          avatarUrl={userData?.avatar_url}
          name={userData?.name}
          reposTotal={userData?.public_repos}
        />
        {isLoading && <ContentLoader />}
        {isSuccess && (
          <div>
            <Table<TableRowProps>
              tableConfig={tableConfig} rows={data?.repos || []}
              pageCount={Math.ceil(userReposTotal ? userReposTotal / OFFSET : 1)}
              currentPage={page}
              count={userReposTotal || 0}
              pageDataCount={data?.repos?.length}
              onChange={handleChangePage}
              offset={OFFSET}/>
          </div>
        )}
      </div>
    </>
  )
}

export default User