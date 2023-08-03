import { useForm, UseFormReturn } from 'react-hook-form'
import { useCallback, useEffect, useRef } from 'react'
import axios, { CancelTokenSource } from 'axios'
import { UseMutateFunction } from '@tanstack/react-query'
import styles from './Main.module.scss'
import { TForm, TLoginParams, TLoginResponse } from '../../types'
import { useLoginMutation } from '../../querries'
import CustomInput from '../../../../shared/formControl/CustomInput/CustomInput'
import { useValidationRules } from '../../../../shared/hooks/useValidationRules'
import { integerFormat } from '../../../../shared/utils/formUtils'

function useFormInit() {
  return useForm<TForm>({
    defaultValues: {
      email: '',
      number: ''
    }
  })
}

function useOnSubmit(mutate: UseMutateFunction<TLoginResponse, Error, TLoginParams, unknown>) {
  const cancelRef = useRef<CancelTokenSource | null>(null)

  return useCallback((data: TForm) => {
    const source = axios.CancelToken.source()
    if (cancelRef.current) {
      cancelRef.current.cancel()
    }
    cancelRef.current = source
    mutate({ formData: data, cancelToken: source })
  }, [])
}

function useSetError({ setError }: UseFormReturn<TForm>, errorMessage?: string) {
  useEffect(() => {
    if (!errorMessage) {
      return
    }
    setError('email', { message: errorMessage })
  }, [errorMessage])
}
const Main = () => {
  const { mutate, error, isLoading, data } = useLoginMutation()
  const formReturn = useFormInit()
  const submit = useOnSubmit(mutate)
  const { requiredRule, emailValidation } = useValidationRules()
  useSetError(formReturn, error?.message)

  const { handleSubmit, control } = formReturn

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        {isLoading && <p>Receiving Response...</p>}
        <h1 className={styles.title}>Login</h1>
        <CustomInput
          control={control}
          label="Email *"
          name="email"
          rules={{
            required: requiredRule(),
            validate: emailValidation
          }}
        />
        <CustomInput
          control={control}
          label="Number"
          mask="99-99-99"
          maskChar=""
          alwaysShowMask
          name="number"
          handleChange={integerFormat}
        />
        <button
          className={styles.buttonSubmit}
          type="submit">
          Submit
        </button>
      </form>
      {
        data?.length && (
          <div className={styles.container}>
            <p>Response:</p>
            {
              data.map(({ email, number }) => (
                <div key={`${email}_${number}`}>
                  <p>{`Email: ${email}`}</p>
                  <p>{`Number: ${number}`}</p>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Main
