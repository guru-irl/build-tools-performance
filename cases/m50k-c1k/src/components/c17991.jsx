import React from 'react';
const LABEL_17991 = 'component_17991';
export function Component17991({ value = 17991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17991, 'data-value': derived.doubled }, children);
}
export default Component17991;
