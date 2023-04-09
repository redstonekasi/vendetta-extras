import { ContentNode } from "./ContentNode";

export type PrimitiveStructurableText = string;
export type AnnotatedStructurableText = ContentNode[];
export type StructurableText = PrimitiveStructurableText | AnnotatedStructurableText;
