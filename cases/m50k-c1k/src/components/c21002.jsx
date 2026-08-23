import React from 'react';
const LABEL_21002 = 'component_21002';
export function Component21002({ value = 21002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21002, 'data-value': derived.doubled }, children);
}
export default Component21002;
