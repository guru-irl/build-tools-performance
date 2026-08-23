import React from 'react';
const LABEL_17429 = 'component_17429';
export function Component17429({ value = 17429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17429, 'data-value': derived.doubled }, children);
}
export default Component17429;
