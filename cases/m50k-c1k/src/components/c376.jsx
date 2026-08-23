import React from 'react';
const LABEL_376 = 'component_376';
export function Component376({ value = 376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_376, 'data-value': derived.doubled }, children);
}
export default Component376;
