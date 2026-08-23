import React from 'react';
const LABEL_22092 = 'component_22092';
export function Component22092({ value = 22092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22092, 'data-value': derived.doubled }, children);
}
export default Component22092;
