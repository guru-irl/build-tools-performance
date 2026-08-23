import React from 'react';
const LABEL_2513 = 'component_2513';
export function Component2513({ value = 2513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2513, 'data-value': derived.doubled }, children);
}
export default Component2513;
