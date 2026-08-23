import React from 'react';
const LABEL_12149 = 'component_12149';
export function Component12149({ value = 12149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12149, 'data-value': derived.doubled }, children);
}
export default Component12149;
