import React from 'react';
const LABEL_32990 = 'component_32990';
export function Component32990({ value = 32990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32990, 'data-value': derived.doubled }, children);
}
export default Component32990;
