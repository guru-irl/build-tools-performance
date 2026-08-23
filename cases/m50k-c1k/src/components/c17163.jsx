import React from 'react';
const LABEL_17163 = 'component_17163';
export function Component17163({ value = 17163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17163, 'data-value': derived.doubled }, children);
}
export default Component17163;
