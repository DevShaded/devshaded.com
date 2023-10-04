type Meta = {
    parent: { [key: string]: any }
    path: string[]
    document: { [key: string]: any }
}

type CustomRuleCallback = (field: any, meta: Meta) => true | string | Promise<true | string>

export type RuleType = {
    required: () => RuleType
    custom: (cb: CustomRuleCallback) => RuleType
    min: (min: number) => RuleType
    max: (max: number) => RuleType
    length: (exactLength: number) => RuleType
    greaterThan: (gt: number) => RuleType
    uri: (options: { scheme: string[] }) => RuleType
}
