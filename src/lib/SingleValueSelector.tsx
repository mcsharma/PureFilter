import { EntityNames } from './utils/types'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'

interface Option {
  id: string | number | boolean
  label: string
}
interface Props {
  entityNames: EntityNames
  options: Option[]
  value: Option | undefined
  onChange: (val: Option | null) => void
}
export default function SingleValueSelector({
  entityNames,
  options,
  value,
  onChange,
}: Props) {
  return (
    <Select
      size="sm"
      variant='plain'
      slotProps={{
        root: {
          'borderRadius': 0
        }
      }}
      value={value}
      onChange={(e, newVal) => onChange(newVal)}
      placeholder={`Search ${entityNames.singular}`}
      sx={{ width: 180 }}
    >
      {options.map((option) => (
        <Option value={option.id}>{option.label}</Option>
      ))}
    </Select>
  )
}
