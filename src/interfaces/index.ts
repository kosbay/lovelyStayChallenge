export type UsersQueryParams = {
  username: string
  page?: number
  offset?: number
  sortBy?: string
}

export type UserQueryParams = {
  username: string
  enabled?: boolean
}

export type UserReposQueryParams = {
  username: string
  page?: number
  offset?: number
  enabled?: boolean
}
