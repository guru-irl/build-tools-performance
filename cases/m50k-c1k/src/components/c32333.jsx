import React from 'react';
const LABEL_32333 = 'component_32333';
export function Component32333({ value = 32333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32333, 'data-value': derived.doubled }, children);
}
export default Component32333;
