import React from 'react';
const LABEL_23416 = 'component_23416';
export function Component23416({ value = 23416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23416, 'data-value': derived.doubled }, children);
}
export default Component23416;
