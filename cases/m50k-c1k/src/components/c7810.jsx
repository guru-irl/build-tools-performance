import React from 'react';
const LABEL_7810 = 'component_7810';
export function Component7810({ value = 7810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7810, 'data-value': derived.doubled }, children);
}
export default Component7810;
