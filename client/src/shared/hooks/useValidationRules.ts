import { RegisterOptions, ValidateResult } from 'react-hook-form'
import { useCallback } from 'react'
import { EMAIL_VALIDATION } from '../constants/regexes'

export const useValidationRules = () => {
  const requiredRule: (message?: string) => RegisterOptions['required'] = useCallback(
    (message) => ({
      value: true,
      message: message || 'Field is Required'
    }),
    []
  )

  const emailValidation: RegisterOptions['validate'] = useCallback(
    (email: string): ValidateResult =>
      EMAIL_VALIDATION.test(email)
      || 'Email format invalid' || false,
    []
  )

  return {
    requiredRule,
    emailValidation
  }
}
