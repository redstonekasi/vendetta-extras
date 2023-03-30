import { ContentNode } from "./ContentNode";

export interface PrimitiveStructurableText {
  content: string;
}

export interface AnnotatedStructurableText {
  content: ContentNode[];
}

export type StructurableText = PrimitiveStructurableText | AnnotatedStructurableText;
