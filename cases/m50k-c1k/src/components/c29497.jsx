import React from 'react';
const LABEL_29497 = 'component_29497';
export function Component29497({ value = 29497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29497, 'data-value': derived.doubled }, children);
}
export default Component29497;
