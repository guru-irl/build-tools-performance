import React from 'react';
const LABEL_15928 = 'component_15928';
export function Component15928({ value = 15928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15928, 'data-value': derived.doubled }, children);
}
export default Component15928;
