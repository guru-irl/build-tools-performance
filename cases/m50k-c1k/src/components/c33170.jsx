import React from 'react';
const LABEL_33170 = 'component_33170';
export function Component33170({ value = 33170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33170, 'data-value': derived.doubled }, children);
}
export default Component33170;
