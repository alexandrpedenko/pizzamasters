import { MdStore as icon } from "react-icons/md"
import PriceInput from "../components/PriceInput"

export default {
  name: "storeSettings",
  title: "Home Settings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Home Page Title",
      type: "string",
    },
    {
      name: 'pizzachefs',
      title: 'Pizza chefs',
      type: 'array',
      of: [{  type: 'reference', to: [{ type: 'pizzachef' }] }]
    },
    {
      name: 'pizzatop',
      title: 'Our Pizza of the Day',
      type: 'array',
      of: [{  type: 'reference', to: [{ type: 'pizza' }] }]
    }
  ],
}