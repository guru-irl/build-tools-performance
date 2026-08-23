import React from 'react';
const LABEL_17789 = 'component_17789';
export function Component17789({ value = 17789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17789, 'data-value': derived.doubled }, children);
}
export default Component17789;
