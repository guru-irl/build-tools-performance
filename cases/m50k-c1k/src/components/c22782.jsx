import React from 'react';
const LABEL_22782 = 'component_22782';
export function Component22782({ value = 22782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22782, 'data-value': derived.doubled }, children);
}
export default Component22782;
