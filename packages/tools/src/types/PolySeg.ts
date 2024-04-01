import type { Types } from 'cornerstone3d-angular-core';

export type PolySegConversionOptions = {
  segmentIndices?: number[];
  segmentationRepresentationUID?: string;
  viewport?: Types.IStackViewport | Types.IVolumeViewport;
};
