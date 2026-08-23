import React from 'react';
const LABEL_32782 = 'component_32782';
export function Component32782({ value = 32782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32782, 'data-value': derived.doubled }, children);
}
export default Component32782;
