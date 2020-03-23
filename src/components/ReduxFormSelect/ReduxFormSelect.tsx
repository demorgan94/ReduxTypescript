import React from 'react'
import { map } from 'lodash'
import { FormGroup, Label } from 'reactstrap'

const ReduxFormSelect: React.FC = (field: any) => {
    return (
        <FormGroup row={true}>
            <Label>{field.label}</Label>
            <select {...field.input} disabled={field.disabled} className="form-control">
                <option value="" disabled={true}>
                    {field.placeHolder}
                </option>
                {map(field.datas, (data: any, i: number) => (
                    <option key={i} value={data.value}>
                        {data.label}
                    </option>
                ))}
            </select>
            {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
        </FormGroup>
    )
}

export default ReduxFormSelect
