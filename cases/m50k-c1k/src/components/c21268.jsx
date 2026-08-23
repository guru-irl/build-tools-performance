import React from 'react';
const LABEL_21268 = 'component_21268';
export function Component21268({ value = 21268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21268, 'data-value': derived.doubled }, children);
}
export default Component21268;
