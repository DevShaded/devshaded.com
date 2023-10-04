import { RuleType } from "@/types/Sanity/ValidationRuleType";

export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        {
            name: 'schoolName',
            title: 'School Name',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'grade',
            title: 'Grade',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Work Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
};
