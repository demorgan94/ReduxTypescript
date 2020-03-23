import React from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const ReduxFormInput: React.FC = (field: any) => {
    return (
        <FormGroup row={true}>
            <Label>{field.label}</Label>
            <Input
                {...field.input}
                type={field.type}
                placeholder={field.placeholder}
                max={field.maxDate}
                min={field.minDate}
                step={field.step}
                disabled={field.disabled} />
                {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
        </FormGroup>
    )
}

export default ReduxFormInput
