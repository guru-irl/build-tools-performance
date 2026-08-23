import React from 'react';
const LABEL_1590 = 'component_1590';
export function Component1590({ value = 1590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1590, 'data-value': derived.doubled }, children);
}
export default Component1590;
