import React from 'react';
const LABEL_39416 = 'component_39416';
export function Component39416({ value = 39416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39416, 'data-value': derived.doubled }, children);
}
export default Component39416;
