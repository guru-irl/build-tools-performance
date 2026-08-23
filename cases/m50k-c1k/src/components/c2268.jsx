import React from 'react';
const LABEL_2268 = 'component_2268';
export function Component2268({ value = 2268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2268, 'data-value': derived.doubled }, children);
}
export default Component2268;
