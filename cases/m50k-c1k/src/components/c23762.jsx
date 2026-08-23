import React from 'react';
const LABEL_23762 = 'component_23762';
export function Component23762({ value = 23762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23762, 'data-value': derived.doubled }, children);
}
export default Component23762;
