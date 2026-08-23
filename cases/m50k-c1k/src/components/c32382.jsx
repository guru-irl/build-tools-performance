import React from 'react';
const LABEL_32382 = 'component_32382';
export function Component32382({ value = 32382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32382, 'data-value': derived.doubled }, children);
}
export default Component32382;
