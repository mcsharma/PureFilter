import * as React from 'react'
import { StringEnumField } from '../types'
import MultiValuesSelector from '../MultiValuesSelector'

interface IStringEnumFilterInput {
  field: StringEnumField
  values: string[]
  onUpdate: (values: string[]) => void
}

export default function StringEnumFilterInput({
  field,
  values,
  onUpdate,
}: IStringEnumFilterInput) {
  const options = React.useMemo(() => Object.values(field.strEnum), [field.strEnum])

  return (
    <MultiValuesSelector
      entityNames={field.names}
      initialValues={values}
      onUpdate={onUpdate}
      options={options}
    />
  )
}
