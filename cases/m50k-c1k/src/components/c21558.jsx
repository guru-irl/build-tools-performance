import React from 'react';
const LABEL_21558 = 'component_21558';
export function Component21558({ value = 21558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21558, 'data-value': derived.doubled }, children);
}
export default Component21558;
