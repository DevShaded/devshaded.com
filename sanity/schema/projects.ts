import { RuleType } from "@/types/Sanity/ValidationRuleType";

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'projectLabel',
      title: 'Project Label',
      type: 'string',
      validation: (Rule: RuleType) => Rule.required(),
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      validation: (Rule: RuleType) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
  ],
}
