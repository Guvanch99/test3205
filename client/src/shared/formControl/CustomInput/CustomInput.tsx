import { Control, RegisterOptions, useController } from 'react-hook-form'
import { FC } from 'react'
import classNames from 'classnames'
import InputMask from 'react-input-mask'
import styles from './CustomInput.module.scss'

type TProps = {
  control: Control<any>;
  label: string;
  name: string;
  type?: string;
  rules?: RegisterOptions;
  handleChange?: (value: string) => string | number;
  mask?: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
};

const CustomInput: FC<TProps> = ({
  control,
  name,
  label,
  rules,
  handleChange,
  mask = '',
  ...rest
}) => {
  const {
    field: { ref, ...fieldRest },
    fieldState: { error }
  } = useController({
    name,
    control,
    rules
  })
  const isError = !!Object.values(error || {}).length

  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <InputMask
        {...rest}
        {...fieldRest}
        id={name}
        mask={mask}
        className={classNames(styles.input, { [styles.error]: isError })}
        onChange={(e) => {
          // eslint-disable-next-line no-unused-expressions
          handleChange ? fieldRest.onChange(handleChange(e.target.value)) : fieldRest.onChange(e)
        }}
      />
      {isError && <p className={styles.errorMessage}>{error?.message}</p>}
    </div>
  )
}

export default CustomInput
