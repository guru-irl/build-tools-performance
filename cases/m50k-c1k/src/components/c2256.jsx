import React from 'react';
const LABEL_2256 = 'component_2256';
export function Component2256({ value = 2256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2256, 'data-value': derived.doubled }, children);
}
export default Component2256;
