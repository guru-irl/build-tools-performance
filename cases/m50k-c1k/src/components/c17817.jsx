import React from 'react';
const LABEL_17817 = 'component_17817';
export function Component17817({ value = 17817, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17817, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17817, 'data-value': derived.doubled }, children);
}
export default Component17817;
