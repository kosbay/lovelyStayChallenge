import axios, { AxiosError } from 'axios'

import { API_URL, DEFAULT_ERROR_MESSAGE } from '../constants'
import { UsersQueryParams, UserQueryParams, UserReposQueryParams } from '../interfaces'

const fetchGithubUsers = async ({ username, page = 1, offset = 10, sortBy }: UsersQueryParams) => {
  try {
    const { data } = await axios.get(`${API_URL}/search/users`, {
      params: {
        q: username + 'in:login',
        page,
        per_page: offset,
        sort: sortBy,
      }
    })
    
    return {
      payload: data,
      isError: false,
      errorMessage: '',
    }
  } catch(err) {
    const error = err as AxiosError
    return {
      payload: null,
      isError: true,
      errorMessage: error.response?.data?.message || DEFAULT_ERROR_MESSAGE,
    }
  }
}


const fetchUser = async ({ username }: UserQueryParams) => {
  try {
    const { data } = await axios.get(`${API_URL}/users/${username}`)
    
    return data
  } catch(err) {
    const error = err as AxiosError
    return {
      isError: true,
      message: error.response?.data?.message || DEFAULT_ERROR_MESSAGE
    }
  }
}

const fetchUserRepos = async ({ username, page = 1, offset = 10 }: UserReposQueryParams) => {
  try {
    const { data } = await axios.get(`${API_URL}/users/${username}/repos`, {
      params: {
        page,
        per_page: offset,
      }
    })
    
    return {
      repos: data,
      isError: false,
    }
  } catch(err) {
    const error = err as AxiosError
    return {
      isError: true,
      message: error.response?.data?.message || DEFAULT_ERROR_MESSAGE,
    }
  }
}

export { fetchGithubUsers, fetchUser, fetchUserRepos }