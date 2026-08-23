import React from 'react';
const LABEL_38382 = 'component_38382';
export function Component38382({ value = 38382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38382, 'data-value': derived.doubled }, children);
}
export default Component38382;
