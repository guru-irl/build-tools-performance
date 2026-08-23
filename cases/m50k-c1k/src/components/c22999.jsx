import React from 'react';
const LABEL_22999 = 'component_22999';
export function Component22999({ value = 22999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22999, 'data-value': derived.doubled }, children);
}
export default Component22999;
