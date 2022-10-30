import { useQuery } from 'react-query'

import { fetchUser } from '../helpers/requests'
import { UserQueryParams } from '../interfaces'

const useUser = ({ username = '', enabled }: UserQueryParams) => {
  return useQuery(['user', username], () => fetchUser({ username }), {
    keepPreviousData: true, retry: 1, enabled
  })
}

export { useUser, fetchUser }
