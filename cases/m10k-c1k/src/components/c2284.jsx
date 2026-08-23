import React from 'react';
const LABEL_2284 = 'component_2284';
export function Component2284({ value = 2284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2284, 'data-value': derived.doubled }, children);
}
export default Component2284;
