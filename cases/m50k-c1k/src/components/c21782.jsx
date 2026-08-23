import React from 'react';
const LABEL_21782 = 'component_21782';
export function Component21782({ value = 21782, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21782, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21782, 'data-value': derived.doubled }, children);
}
export default Component21782;
