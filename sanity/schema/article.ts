import { RuleType } from "@/types/Sanity/ValidationRuleType";

export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
        {
            name: 'link',
            title: 'Link',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
    ],
}
