import { useQuery } from 'react-query'

import { fetchUserRepos } from '../helpers/requests'
import { UserReposQueryParams } from '../interfaces'

const useRepos = ({ username = '', page, offset, enabled }: UserReposQueryParams) => {
  return useQuery(['repos', username, page, offset], () => fetchUserRepos({ username, page, offset }), {
    keepPreviousData: true, retry: 1, enabled,
  })
}

export { useRepos }
