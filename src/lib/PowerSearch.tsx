import * as React from 'react'
import AddedFilter from './AddedFilter'
import FieldSearchTypeahead from './FieldSearchTypeahead'
import { FieldBase } from './types'
import usePowerSearch from './hooks/usePowerSearch'
const styled = window.styled
import './css/index.css'

interface IPowerSearch {
  schema: Array<FieldBase>
}

const PowerSearch: React.FC<IPowerSearch> = ({ schema }) => {
  const { filters, addFilter, deleteFilter, updateFilter } = usePowerSearch()

  return (
    <Root>
      {filters.map((curFilter) => (
        <AddedFilter
          key={curFilter.id}
          filter={curFilter}
          onUpdate={updateFilter}
          onDelete={() => deleteFilter(curFilter.id)}
        />
      ))}
      <FieldSearchTypeahead fields={schema} onSelect={addFilter} />
    </Root>
  )
}

export default PowerSearch

const Root = styled.div`
  box-sizing: border-box;
  width: 800px;
  padding: 2px;
  border-radius: 8px;
  display: flex;
  border: 1px solid lightgray;
  align-items: stretch;
  position: relative;
  flex-wrap: wrap;
`
