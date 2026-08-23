import React from 'react';
const LABEL_5453 = 'component_5453';
export function Component5453({ value = 5453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5453, 'data-value': derived.doubled }, children);
}
export default Component5453;
