import { FaPepperHot as icon } from "react-icons/fa"

export default {
  name: "topping",
  title: "Toppings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Topping Name",
      type: "string",
      description: "Topping for pizza"
    },
    {
      name: "vegeterian",
      title: "Vegeterian",
      type: "boolean",
      description: "Topping for pizza",
      options: {
        layout: "checkbox"
      }
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegeterian: 'vegeterian'
    },
    prepare: fields => ({
      title: `${fields.name} ${fields.vegeterian ? '🥦' : '🥩' }`
    })
  }
}