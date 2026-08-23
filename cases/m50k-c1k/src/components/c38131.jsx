import React from 'react';
const LABEL_38131 = 'component_38131';
export function Component38131({ value = 38131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38131, 'data-value': derived.doubled }, children);
}
export default Component38131;
