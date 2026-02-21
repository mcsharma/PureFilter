import * as React from 'react'
import { OperatorType } from '../types'
import DateInput from '../components/DateInput'

interface IDateFilterInput {
  operatorType: OperatorType
  values: any[]
  onUpdate: (values: any[]) => void
}

export default function DateFilterInput({
  operatorType,
  values,
  onUpdate,
}: IDateFilterInput) {
  if (operatorType === OperatorType.IS_BETWEEN) {
    return (
      <>
        <DateInput
          key="min"
          label="from date"
          value={values[0]}
          onChange={(value) => onUpdate([value, values[1]])}
        />
        <DateInput
          key="max"
          label="to date"
          value={values[1]}
          onChange={(value) => onUpdate([values[0], value])}
        />
      </>
    )
  } else {
    return (
      <DateInput
        label=""
        value={values[0]}
        onChange={(value) => onUpdate([value])}
      />
    )
  }
}
