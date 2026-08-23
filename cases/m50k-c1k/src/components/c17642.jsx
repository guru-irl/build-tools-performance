import React from 'react';
const LABEL_17642 = 'component_17642';
export function Component17642({ value = 17642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17642, 'data-value': derived.doubled }, children);
}
export default Component17642;
