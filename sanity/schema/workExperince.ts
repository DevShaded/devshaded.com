import { RuleType } from "@/types/Sanity/ValidationRuleType";

export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'companyName',
            title: 'Company Name',
            type: 'string',
            validation: (Rule: RuleType) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role',
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
        },
        {
            name: 'isCurrent',
            title: 'Is Current',
            type: 'boolean',
            description: 'Check this if it is your current job',
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
