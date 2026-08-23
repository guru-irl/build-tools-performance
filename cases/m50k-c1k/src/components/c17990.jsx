import React from 'react';
const LABEL_17990 = 'component_17990';
export function Component17990({ value = 17990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17990, 'data-value': derived.doubled }, children);
}
export default Component17990;
