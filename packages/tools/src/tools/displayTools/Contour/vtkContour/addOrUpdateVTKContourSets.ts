import { Types } from 'cornerstone3d-angular-core';

import {
  SegmentationRepresentationConfig,
  ToolGroupSpecificContourRepresentation,
} from '../../../../types';
import { addContourSetsToElement } from './addContourSetsToElement';
import { updateVTKContourSets } from './updateVTKContourSets';

export function addOrUpdateVTKContourSets(
  viewport: Types.IVolumeViewport,
  geometryIds: string[],
  contourRepresentation: ToolGroupSpecificContourRepresentation,
  contourRepresentationConfig: SegmentationRepresentationConfig
) {
  const { segmentationRepresentationUID } = contourRepresentation;
  const actorUID = `CONTOUR_${segmentationRepresentationUID}`;
  const actor = viewport.getActor(actorUID);

  const addOrUpdateFn = actor ? updateVTKContourSets : addContourSetsToElement;
  addOrUpdateFn(
    viewport,
    geometryIds,
    contourRepresentation,
    contourRepresentationConfig,
    actorUID
  );
}
