import React from 'react';
const LABEL_29529 = 'component_29529';
export function Component29529({ value = 29529, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29529, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29529, 'data-value': derived.doubled }, children);
}
export default Component29529;
