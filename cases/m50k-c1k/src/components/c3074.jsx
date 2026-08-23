import React from 'react';
const LABEL_3074 = 'component_3074';
export function Component3074({ value = 3074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3074, 'data-value': derived.doubled }, children);
}
export default Component3074;
