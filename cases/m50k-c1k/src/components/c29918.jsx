import React from 'react';
const LABEL_29918 = 'component_29918';
export function Component29918({ value = 29918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29918, 'data-value': derived.doubled }, children);
}
export default Component29918;
