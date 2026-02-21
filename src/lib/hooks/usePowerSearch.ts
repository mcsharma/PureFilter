import * as React from 'react'
import { FieldBase, OperatorType, SimpleFilter } from '../types'
import getDefaultFilterValues from '../utils/getDefaultFilterValues'
import { getRandomString } from '../utils/random'

export default function usePowerSearch() {
  const [filters, setFilters] = React.useState<Array<SimpleFilter<any>>>([])

  const addFilter = (field: FieldBase) => {
    setFilters([
      ...filters,
      {
        id: getRandomString(),
        field,
        operator: OperatorType.IS,
        values: getDefaultFilterValues(field.type, OperatorType.IS),
      },
    ])
  }
  const deleteFilter = (filterID: string) => {
    setFilters(filters.filter((filter) => filter.id !== filterID))
  }
  const updateFilter = (updatedFilter: SimpleFilter<any>) => {
    setFilters(
      filters.map((filter) =>
        filter.id === updatedFilter.id ? updatedFilter : filter
      )
    )
  }

  return { filters, addFilter, deleteFilter, updateFilter }
}
