import React from 'react';
const LABEL_17357 = 'component_17357';
export function Component17357({ value = 17357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17357, 'data-value': derived.doubled }, children);
}
export default Component17357;
