import React from 'react';
const LABEL_3521 = 'component_3521';
export function Component3521({ value = 3521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3521, 'data-value': derived.doubled }, children);
}
export default Component3521;
