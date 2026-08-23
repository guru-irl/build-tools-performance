import React from 'react';
const LABEL_13268 = 'component_13268';
export function Component13268({ value = 13268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13268, 'data-value': derived.doubled }, children);
}
export default Component13268;
