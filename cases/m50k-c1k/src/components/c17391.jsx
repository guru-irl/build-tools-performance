import React from 'react';
const LABEL_17391 = 'component_17391';
export function Component17391({ value = 17391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17391, 'data-value': derived.doubled }, children);
}
export default Component17391;
