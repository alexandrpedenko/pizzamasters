import { MdPerson as icon } from "react-icons/md"

export default {
  name: "pizzachef",
  title: "Pizza Chef",
  type: "document",
  icon,
  fields: [
    {
      name: "pizzachefname",
      title: "Pizza Chef Name",
      type: "string",
      description: "Pizza chef and slice master"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: 'name',
        maxLength: 100
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Something, about this master"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      }
    },
  ],
}