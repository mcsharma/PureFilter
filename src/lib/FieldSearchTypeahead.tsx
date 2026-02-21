import { FieldBase } from './types'
import * as React from 'react'
import Autocomplete from '@mui/joy/Autocomplete'

interface IFieldSearchTypeahead {
  fields: Array<FieldBase>
  onSelect: (field: FieldBase) => void
}

export default function FieldSearchTypeahead({
  fields,
  onSelect,
}: IFieldSearchTypeahead) {
  const fieldNames = React.useMemo(
    () => fields.map((s) => s.names.singular),
    [fields]
  )
  const [inputValue, setInputValue] = React.useState('')
  return (
    <Autocomplete
      autoFocus
      disableClearable
      variant="plain"
      size="sm"
      placeholder="Search fields"
      inputValue={inputValue}
      onInputChange={(e, newValue) => {
        setInputValue(newValue)
      }}
      value=""
      onChange={(e, fieldName) => {
        const field = fields.find((field) => field.names.singular === fieldName)
        if (field) {
          onSelect(field)
          setInputValue('')
        }
      }}
      popupIcon={null}
      options={fieldNames}
    />
  )
}

const Root = window.styled.div`
margin: 2px 0;
flex-grow: 1`
