import { FieldBase, FieldType, OperatorType, StringEnumField } from './types'
import TextFilterInput from './TextFilterInput'
import StringEnumFilterInput from './inputs/StringEnumFilterInput'
import BooleanFilterInput from './inputs/BooleanFilterInput'
import NumberFilterInput from './inputs/NumberFilterInput'
import DateFilterInput from './inputs/DateFilterInput'

interface IFilterValuesInput {
  field: FieldBase
  operatorType: OperatorType
  values: Array<any>
  onUpdate: (values: Array<any>) => void
}

export default function FilterValuesInput({
  field,
  values,
  onUpdate,
  operatorType,
}: IFilterValuesInput) {
  switch (field.type) {
    case FieldType.STRING_ENUM: {
      switch (operatorType) {
        case OperatorType.IS:
        case OperatorType.IS_NOT:
          return (
            <StringEnumFilterInput
              field={field as StringEnumField}
              values={values}
              onUpdate={onUpdate}
            />
          )
        default:
          throw new Error('unimplemented!')
      }
    }
    case FieldType.BOOLEAN: {
      return (
        <BooleanFilterInput
          field={field}
          values={values}
          onUpdate={onUpdate}
        />
      )
    }
    case FieldType.INTEGER: {
      return (
        <NumberFilterInput
          field={field}
          operatorType={operatorType}
          values={values}
          onUpdate={onUpdate}
          inputType="integer"
        />
      )
    }
    case FieldType.FLOAT: {
      return (
        <NumberFilterInput
          field={field}
          operatorType={operatorType}
          values={values}
          onUpdate={onUpdate}
          inputType="float"
        />
      )
    }
    case FieldType.TEXT:
      return (
        <TextFilterInput
          label={field.names.singular}
          inputType="text"
          value={values[0]}
          onChange={(value) => onUpdate([value])}
          onDone={(value) => onUpdate([value])}
        />
      )
    case FieldType.DATE: {
      return (
        <DateFilterInput
          operatorType={operatorType}
          values={values}
          onUpdate={onUpdate}
        />
      )
    }
    case FieldType.DATE_AND_TIME: {
      if (operatorType == OperatorType.IS_BETWEEN) {
        throw new Error("unimplemented!")
      } else {
        throw new Error("unimplemented!")
      }
    }
    case FieldType.ARRAY:
      throw new Error("unimplemented!")

    default:
      throw new Error('unimplemented!')
  }
}
