import React from 'react';
const LABEL_6148 = 'component_6148';
export function Component6148({ value = 6148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6148, 'data-value': derived.doubled }, children);
}
export default Component6148;
