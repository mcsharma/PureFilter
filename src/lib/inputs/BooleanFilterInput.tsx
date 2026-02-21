import * as React from 'react'
import { FieldBase } from '../types'
import SingleValueSelector from '../SingleValueSelector'

interface IBooleanFilterInput {
  field: FieldBase
  values: any[]
  onUpdate: (values: any[]) => void
}

export default function BooleanFilterInput({
  field,
  values,
  onUpdate,
}: IBooleanFilterInput) {
  return (
    <SingleValueSelector
      entityNames={field.names}
      options={[
        { id: true, label: 'true' },
        { id: false, label: 'false' },
      ]}
      value={
        values[0] != null
          ? { id: Boolean(values[0]), label: String(Boolean(values[0])) }
          : undefined
      }
      onChange={(val) => {
        onUpdate([Boolean(val?.id)])
      }}
    />
  )
}
