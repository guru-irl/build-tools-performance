import React from 'react';
const LABEL_17371 = 'component_17371';
export function Component17371({ value = 17371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17371, 'data-value': derived.doubled }, children);
}
export default Component17371;
