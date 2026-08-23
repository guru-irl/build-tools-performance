import React from 'react';
const LABEL_22170 = 'component_22170';
export function Component22170({ value = 22170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22170, 'data-value': derived.doubled }, children);
}
export default Component22170;
