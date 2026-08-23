import React from 'react';
const LABEL_35943 = 'component_35943';
export function Component35943({ value = 35943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35943, 'data-value': derived.doubled }, children);
}
export default Component35943;
