import React from 'react'
import PatchEvent, {set, unset} from "part:@sanity/form-builder/patch-event"

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD'
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => {
  return (
    <div>
      <h2>{type.title} - {value ? formatMoney(value) : ''}</h2>
      <p>{type.description}</p>
      <input 
        type={type.name} 
        value={value} 
        ref={inputComponent}
        onChange={event => onChange(createPatchFrom(event.target.value))}
      />
    </div>
  )
}

PriceInput.focus = function() {
  this._inputElement.focus()
}

export default PriceInput
