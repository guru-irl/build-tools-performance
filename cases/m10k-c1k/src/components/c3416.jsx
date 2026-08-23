import React from 'react';
const LABEL_3416 = 'component_3416';
export function Component3416({ value = 3416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3416, 'data-value': derived.doubled }, children);
}
export default Component3416;
