import React from 'react';
const LABEL_28416 = 'component_28416';
export function Component28416({ value = 28416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28416, 'data-value': derived.doubled }, children);
}
export default Component28416;
