import * as React from 'react'
import FieldOperatorMappings from './config/FieldOperatorMappings'
import { FieldType, OperatorType } from './types'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

interface IOperatorSelector {
  fieldType: FieldType
  selectedOperator: OperatorType
  onChange: (op: OperatorType) => void
}

export default function OperatorSelector({
  fieldType,
  selectedOperator,
  onChange,
}: IOperatorSelector) {
  const opMenuItems = React.useMemo(
    () =>
      FieldOperatorMappings[fieldType].map((op) => ({
        id: op,
        label: toOpString(op),
      })),
    [fieldType]
  )

  return <Select
    size="sm"
    variant='plain'
    slotProps={{
      root: {
        'borderRadius': 0
      }
    }}
    sx={{ width: 180 }}
  >
    {opMenuItems.map((option) => (
      <Option value={option.id}>{option.label}</Option>
    ))}
  </Select>
}

function toOpString(op: OperatorType): string {
  return OperatorType[op].toLowerCase().replace(/_/g, ' ')
}
