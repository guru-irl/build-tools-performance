import React from 'react';
const LABEL_17002 = 'component_17002';
export function Component17002({ value = 17002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17002, 'data-value': derived.doubled }, children);
}
export default Component17002;
