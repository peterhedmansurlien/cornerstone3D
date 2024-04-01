import { Types } from '@cornerstone3d-angular/core';
import { LoadRequestFunction } from './LoadRequestFunction';

export interface DICOMLoaderImageOptions {
  useRGBA?: boolean;
  skipCreateImage?: boolean;
  preScale?: {
    enabled: boolean;
    scalingParameters?: Types.ScalingParameters;
  };
  targetBuffer?: {
    type: 'Uint8Array' | 'Uint16Array' | 'Int16Array' | 'Float32Array';
    arrayBuffer: ArrayBufferLike;
    length: number;
    offset: number;
    rows?: number;
    columns?: number;
  };
  isSharedArrayBuffer?: boolean;
  loader?: LoadRequestFunction;
  decodeLevel?: number;
  retrieveOptions?: Types.RetrieveOptions;
  streamingData?: Record<string, unknown>;
}
