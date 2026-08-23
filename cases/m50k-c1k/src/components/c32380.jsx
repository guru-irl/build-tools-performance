import React from 'react';
const LABEL_32380 = 'component_32380';
export function Component32380({ value = 32380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32380, 'data-value': derived.doubled }, children);
}
export default Component32380;
