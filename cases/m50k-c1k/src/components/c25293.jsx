import React from 'react';
const LABEL_25293 = 'component_25293';
export function Component25293({ value = 25293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25293, 'data-value': derived.doubled }, children);
}
export default Component25293;
