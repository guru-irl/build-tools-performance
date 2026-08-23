import React from 'react';
const LABEL_17984 = 'component_17984';
export function Component17984({ value = 17984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17984, 'data-value': derived.doubled }, children);
}
export default Component17984;
