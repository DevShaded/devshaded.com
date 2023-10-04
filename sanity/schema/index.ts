import { type SchemaTypeDefinition } from 'sanity'
import article from "./article";
import workExperince from "./workExperince";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        article,
        workExperince,
    ],
}
