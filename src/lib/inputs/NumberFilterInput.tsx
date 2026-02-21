import * as React from 'react'
import { FieldBase, OperatorType } from '../types'
import TextFilterInput from '../TextFilterInput'

interface INumberFilterInput {
  field: FieldBase
  operatorType: OperatorType
  values: any[]
  onUpdate: (values: any[]) => void
  inputType: 'integer' | 'float'
}

export default function NumberFilterInput({
  field,
  operatorType,
  values,
  onUpdate,
  inputType,
}: INumberFilterInput) {
  switch (operatorType) {
    case OperatorType.IS_BETWEEN:
      return (
        <>
          <TextFilterInput
            key="min"
            width={80}
            label="min value"
            inputType={inputType}
            value={values[0]}
            onChange={(value) => onUpdate([value, values[1]])}
            onDone={(value) => onUpdate([value, values[1]])}
          />
          <TextFilterInput
            key="max"
            width={80}
            label="max value"
            inputType={inputType}
            value={values[1]}
            onChange={(value) => onUpdate([values[0], value])}
            onDone={(value) => onUpdate([values[0], value])}
          />
        </>
      )
    default:
      return (
        <TextFilterInput
          label={field.names.singular}
          inputType={inputType}
          value={values[0]}
          onChange={(value) => onUpdate([value])}
          onDone={(value) => onUpdate([value])}
        />
      )
  }
}
