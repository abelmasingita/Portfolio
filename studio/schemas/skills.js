export default {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
           name: "name",
           type:  "string",
        },
        {
            name: "description",
            type:  "string",
         },
         {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
         
    ]
}