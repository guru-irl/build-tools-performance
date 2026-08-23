import React from 'react';
const LABEL_40101 = 'component_40101';
export function Component40101({ value = 40101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40101, 'data-value': derived.doubled }, children);
}
export default Component40101;
