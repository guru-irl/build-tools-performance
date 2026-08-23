import React from 'react';
const LABEL_24333 = 'component_24333';
export function Component24333({ value = 24333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24333, 'data-value': derived.doubled }, children);
}
export default Component24333;
