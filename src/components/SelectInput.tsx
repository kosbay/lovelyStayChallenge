import { SelectHTMLAttributes } from 'react'

export type SelectInputProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    label: string
    value: string
  }[]
  customClassName?: string
}

const SelectInput: React.FC<SelectInputProps> = ({
  options,
  customClassName = "",
  ...rest
}) => {
  return (
    <select className={`selectInput ${customClassName}`} {...rest}>
      {options.map(({ label, value }) => (
        <option value={value} key={value}>{label}</option>
      ))}
    </select>
  )
}

export default SelectInput;
