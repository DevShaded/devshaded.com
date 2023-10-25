import { type SchemaTypeDefinition } from 'sanity'
import article from "./article";
import workExperince from "./workExperince";
import education from "./education";
import projects from "./projects";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        article,
        workExperince,
        education,
        projects,
    ],
}
