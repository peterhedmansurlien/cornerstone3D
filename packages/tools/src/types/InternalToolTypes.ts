import { Types } from 'cornerstone3d-angular-core';
import { AnnotationTool } from '../tools';
import { Annotation, Annotations } from './AnnotationTypes';

type ToolAnnotationsPair = {
  tool: AnnotationTool;
  annotations: Annotations;
};

type ToolAnnotationPair = {
  tool: AnnotationTool;
  annotation: Annotation;
};

type ToolsWithMoveableHandles = ToolAnnotationPair & {
  handle: Types.Point3;
};

export { ToolsWithMoveableHandles, ToolAnnotationsPair, ToolAnnotationPair };
