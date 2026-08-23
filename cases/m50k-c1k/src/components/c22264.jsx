import React from 'react';
const LABEL_22264 = 'component_22264';
export function Component22264({ value = 22264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22264, 'data-value': derived.doubled }, children);
}
export default Component22264;
