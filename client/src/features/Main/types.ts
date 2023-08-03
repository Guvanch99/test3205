import { CancelTokenSource } from 'axios'

export type TForm = {
  email: string
  number: string
}

export type TLoginParams = {
  formData: TForm
  cancelToken: CancelTokenSource
}

export type TLoginResponse = TForm[]
