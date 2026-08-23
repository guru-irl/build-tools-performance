import React from 'react';
const LABEL_17333 = 'component_17333';
export function Component17333({ value = 17333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17333, 'data-value': derived.doubled }, children);
}
export default Component17333;
