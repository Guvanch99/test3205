import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { apiClient } from '../../shared/utils/apiClient'
import { TForm, TLoginParams, TLoginResponse } from './types'

async function login({ formData, cancelToken }: TLoginParams): Promise<TLoginResponse> {
  try {
    const response = await apiClient.post(
      'auth//login',
      formData,
      { cancelToken: cancelToken.token }
    )
    return response.data
  } catch (error: any) {
    if (error instanceof AxiosError) {
      console.log('e', error)
      throw new Error(error.response?.data?.msg || error.message)
    }
    throw new Error('Unknown Error')
  }
}

export const useLoginMutation = () => useMutation<TLoginResponse, Error, TLoginParams>(
  (params) => login(params)
)
