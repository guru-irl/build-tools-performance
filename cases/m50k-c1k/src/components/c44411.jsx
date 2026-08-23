import React from 'react';
const LABEL_44411 = 'component_44411';
export function Component44411({ value = 44411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44411, 'data-value': derived.doubled }, children);
}
export default Component44411;
