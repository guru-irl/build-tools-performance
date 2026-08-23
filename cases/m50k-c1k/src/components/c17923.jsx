import React from 'react';
const LABEL_17923 = 'component_17923';
export function Component17923({ value = 17923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17923, 'data-value': derived.doubled }, children);
}
export default Component17923;
