import React from 'react';
const LABEL_3558 = 'component_3558';
export function Component3558({ value = 3558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3558, 'data-value': derived.doubled }, children);
}
export default Component3558;
