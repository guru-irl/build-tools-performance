import React from 'react';
const LABEL_21990 = 'component_21990';
export function Component21990({ value = 21990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21990, 'data-value': derived.doubled }, children);
}
export default Component21990;
