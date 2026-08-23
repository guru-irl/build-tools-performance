import React from 'react';
const LABEL_35101 = 'component_35101';
export function Component35101({ value = 35101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35101, 'data-value': derived.doubled }, children);
}
export default Component35101;
