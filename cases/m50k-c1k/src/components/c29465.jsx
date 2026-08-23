import React from 'react';
const LABEL_29465 = 'component_29465';
export function Component29465({ value = 29465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29465, 'data-value': derived.doubled }, children);
}
export default Component29465;
