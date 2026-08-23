import React from 'react';
const LABEL_22486 = 'component_22486';
export function Component22486({ value = 22486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22486, 'data-value': derived.doubled }, children);
}
export default Component22486;
