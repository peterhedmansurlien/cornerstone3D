import { Types } from 'cornerstone3d-angular-core';
import { Synchronizer } from '../store';

export default interface ISynchronizerEventHandler {
  (
    synchronizer: Synchronizer,
    sourceViewport: Types.IViewportId,
    targetViewport: Types.IViewportId,
    sourceEvent: any,
    options?: any
  ): Promise<void> | void;
}
